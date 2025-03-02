/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * Hash function to generate a unique ID from multiple values.
 * Uses SHA-256 hashing via Web Crypto API.
 */
const generateHash = async (data: string): Promise<string> => {
    const encoder = new TextEncoder();
    const dataBuffer = encoder.encode(data);
    const hashBuffer = await crypto.subtle.digest("SHA-256", dataBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(byte => byte.toString(16).padStart(2, "0")).join("");
};

/**
 * Function to collect fingerprinting data.
 */
const collectFingerprintData = async (): Promise<string> => {
    const components: string[] = [];

    // 1️⃣ WebGL Fingerprinting (GPU Vendor & Renderer)
    try {
        const canvas = document.createElement("canvas");
        const gl = canvas.getContext("webgl");
        if (gl) {
            const debugInfo = gl.getExtension("WEBGL_debug_renderer_info");
            if (debugInfo) {
                const vendor = gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL).toLowerCase().trim();
                const renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL).toLowerCase().split(" ")[0]; // Keep only main part
                components.push(`GPU:${vendor}-${renderer}`);
            }
        }
    } catch (error) {
        components.push("GPU:Unavailable");
    }

    // 2️⃣ Audio Fingerprinting (Oscillator Sound Processing)
    try {
        const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
        const analyser = audioContext.createAnalyser();
        const fingerprint = new Float32Array(analyser.frequencyBinCount);
        analyser.getFloatFrequencyData(fingerprint);
        components.push(`Audio:${fingerprint.slice(0, 5).toString()}`);
    } catch (error) {
        components.push("Audio:Unavailable");
    }

    // 3️⃣ CPU Concurrency (Number of Cores)
    components.push(`CPU:${navigator.hardwareConcurrency || "Unknown"}`);

    // 4️⃣ Installed Languages (Normalized Unique Set)
    const uniqueLanguages = [...new Set(navigator.languages.map(lang => lang.split("-")[0]))].join(",");
    components.push(`Lang:${uniqueLanguages}`);

    // 6️⃣ Timezone (Convert to UTC Offset)
    const timezoneOffset = new Date().getTimezoneOffset();
    components.push(`TZ:UTC${timezoneOffset / -60}`);

    // Hash all the collected information to generate a unique visitor ID
    return generateHash(components.join("|"));
};

/**
 * Main function to generate the visitor ID.
 * Ensures same visitor ID in incognito & normal mode.
 */
export const getVisitorId = async (): Promise<{ visitorId: string }> => {
    const id = await collectFingerprintData();
    return { visitorId: id }
};
