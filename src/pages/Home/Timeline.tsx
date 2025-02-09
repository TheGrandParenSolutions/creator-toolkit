import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { CTAnimatedButton } from "@src/shared/Buttons/CTAnimatedButton/CTAnimatedButton";
import { CrownIconSolid } from "@src/shared/Icons/IconLib";

const Timeline = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  // ✅ Smooth rotation for the circle
  const rotateCircle = useTransform(scrollYProgress, [0, 1], [0, -90]);

  // ✅ Background color transformation for steps
  const step1Bg = useTransform(
    scrollYProgress,
    [0, 0.33],
    ["var(--brand-bg-theme)", "var(--brand-bg-theme)"],
  );
  const step2Bg = useTransform(
    scrollYProgress,
    [0.33, 0.66],
    ["var(--brand-bg-theme)", "var(--brand-bg-theme)"],
  );
  const step3Bg = useTransform(
    scrollYProgress,
    [0.66, 1],
    ["var(--brand-bg-theme)", "var(--brand-bg-theme)"],
  );

  // ✅ Button fade-in animation (Appears when Step 3 is in View)
  const buttonOpacity = useTransform(scrollYProgress, [0.8, 1], [0, 1]);

  return (
    <div ref={containerRef} className="section_steps bg-inherit">
      <div className="rotate-height">
        <div className="sticky-hold">
          <div className="giant-circle-hold">
            {/* ✅ Applying smooth rotation */}
            <motion.div
              className="giant-circle"
              style={{
                rotate: rotateCircle,
                transformStyle: "preserve-3d",
              }}
              transition={{
                ease: [0.25, 0.1, 0.25, 1], // Natural cubic-bezier easing
                duration: 1.5, // Slower scroll effect
              }}
            >
              {/* Step 1 */}
              <motion.div className="steps step1">
                <div className="steps-hold">
                  <div className="steps-content">
                    <motion.div
                      className="circle-dot circle-1"
                      style={{ background: step1Bg }}
                    />
                    <motion.div
                      className="steps-container steps1"
                      style={{ background: step1Bg }}
                    >
                      <div className="big-number text-4xl md:text-8xl">01</div>
                      <div className="step-text-block">
                        <p className="text-sm md:text-2xl font-bold less-height text-black">
                        Get started for free
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              {/* Step 2 */}
              <motion.div className="steps step2">
                <div className="steps-hold">
                  <div className="steps-content">
                    <motion.div
                      className="circle-dot circle2"
                      style={{ background: step2Bg }}
                    />
                    <motion.div
                      className="steps-container steps2"
                      style={{ background: step2Bg }}
                    >
                      <div className="big-number text-4xl md:text-8xl">02</div>
                      <div className="step-text-block">
                        <p className="text-sm md:text-2xl font-bold  less-height text-black">
                          Explore tools and use them with your free credits
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              {/* Step 3 */}
              <motion.div className="steps step3">
                <div className="steps-hold">
                  <div className="steps-content">
                    <motion.div
                      className="circle-dot circle3"
                      style={{ background: step3Bg }}
                    />
                    <motion.div
                      className="steps-container steps3"
                      style={{ background: step3Bg }}
                    >
                      <div className="big-number text-4xl md:text-8xl">03</div>
                      <div className="step-text-block">
                        <p className="text-sm md:text-2xl font-bold  less-height text-black">
                          Purchase tools for unlimited credits
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ✅ Button fades in smoothly when Step 3 is in view */}
      <motion.div
        className="steps-button-hold-bottom"
        style={{ opacity: buttonOpacity }}
        transition={{ ease: "easeOut", duration: 1 }}
      >
        <a
          href="/pricing"
          target="_blank"
          className="button-13 is-booking w-inline-block"
        >
          <div className="overflow-hidden-button-wrapper">
            <CTAnimatedButton
              w={200}
              radius={"xl"}
              label="See pricing"
              hoverLabel="You will love it"
              to="/pricing"
              buttonStyles="w-150 p-7"
              icon={<CrownIconSolid />}
            />
          </div>
        </a>
      </motion.div>
    </div>
  );
};

export default Timeline;
