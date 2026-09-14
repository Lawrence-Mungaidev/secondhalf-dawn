import { useEffect, useRef } from "react";

const NAVY = "#182030";
const ORANGE = "#D95328";
const BG_COLOR = "#FBFBF9";
const TOTAL_DURATION = 13.5;
const LOOP_PAUSE = 1.5; // seconds to hold the final reveal before restarting

function cubicEaseInOut(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}
function bounceOut(t: number) {
  const n1 = 7.5625;
  const d1 = 2.75;
  if (t < 1 / d1) return n1 * t * t;
  if (t < 2 / d1) return n1 * (t -= 1.5 / d1) * t + 0.75;
  if (t < 2.5 / d1) return n1 * (t -= 2.25 / d1) * t + 0.9375;
  return n1 * (t -= 2.625 / d1) * t + 0.984375;
}
function clamp(val: number, min = 0, max = 1) {
  return Math.max(min, Math.min(max, val));
}

function drawRoundedRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  width: number,
  height: number,
  radius: number,
  fill = true,
  stroke = false,
) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  ctx.lineTo(x + radius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
  if (fill) ctx.fill();
  if (stroke) ctx.stroke();
}

interface KeyOrDiamondParams {
  x: number;
  y: number;
  size: number;
  rot: number;
  scale: number;
  morph: number;
  isFilled: boolean;
  mainColor: string;
  letter: string;
}

function drawKeyOrDiamond(ctx: CanvasRenderingContext2D, p: KeyOrDiamondParams) {
  ctx.save();
  ctx.translate(p.x, p.y);
  ctx.rotate(p.rot);

  const s = p.size;
  const cornerRadius = 14 * (1 - p.morph * 0.3);

  if (p.morph < 0.99) {
    const depth = (1 - p.morph) * 12;

    ctx.fillStyle = p.mainColor === NAVY ? "#0d131f" : "#b33e1a";
    drawRoundedRect(ctx, -s / 2, -s / 2 + depth, s, s, cornerRadius, true, false);

    if (p.isFilled) {
      ctx.fillStyle = p.mainColor;
      drawRoundedRect(ctx, -s / 2, -s / 2, s, s, cornerRadius, true, false);
    } else {
      ctx.fillStyle = BG_COLOR;
      drawRoundedRect(ctx, -s / 2, -s / 2, s, s, cornerRadius, true, false);
      ctx.strokeStyle = p.mainColor;
      ctx.lineWidth = 9 - p.morph * 1;
      drawRoundedRect(ctx, -s / 2, -s / 2, s, s, cornerRadius, false, true);
    }

    if (p.morph < 0.5) {
      ctx.save();
      ctx.rotate(-p.rot);
      ctx.globalAlpha = 1 - p.morph * 2;
      ctx.fillStyle = p.isFilled ? "#ffffff" : p.mainColor;
      ctx.font = `700 ${Math.round(s * 0.4)}px 'Inter', sans-serif`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(p.letter, 0, 0);
      ctx.restore();
    }
  }

  if (p.morph > 0.01) {
    ctx.globalAlpha = p.morph;
    if (p.isFilled) {
      ctx.fillStyle = ORANGE;
      drawRoundedRect(ctx, -s / 2, -s / 2, s, s, 10, true, false);
    } else {
      const strokeWidth = s * 0.16;
      ctx.strokeStyle = NAVY;
      ctx.lineWidth = strokeWidth;
      ctx.lineJoin = "round";
      drawRoundedRect(
        ctx,
        -s / 2 + strokeWidth / 2,
        -s / 2 + strokeWidth / 2,
        s - strokeWidth,
        s - strokeWidth,
        6,
        false,
        true,
      );
    }
  }

  ctx.restore();
}

export function LogoStoryAnimation({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 1000;
    let height = 625;
    let currentTime = 0;
    let lastTimestamp = 0;
    let rafId = 0;

    function resizeCanvas() {
      const rect = canvas!.parentElement!.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      width = rect.width;
      height = rect.height;
      canvas!.width = width * dpr;
      canvas!.height = height * dpr;
      ctx!.setTransform(1, 0, 0, 1, 0, 0);
      ctx!.scale(dpr, dpr);
    }

    function render(t: number) {
      ctx!.fillStyle = BG_COLOR;
      ctx!.fillRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;
      const scaleBase = Math.min(width / 800, height / 500);

      if (t < 4.8) {
        const boyOpacity = clamp(1 - (t - 3.8) / 0.7);
        ctx!.save();
        ctx!.globalAlpha = boyOpacity;

        let boyOffsetY = 0;
        let laptopY = cy + 20 * scaleBase;
        let laptopRot = 0;
        let boyExpression = "happy";

        if (t > 2.5) {
          const slipProgress = clamp((t - 2.5) / 1.5);
          boyOffsetY = Math.sin(slipProgress * Math.PI) * -15;
          laptopY += slipProgress * slipProgress * 220 * scaleBase;
          laptopRot = slipProgress * 0.45;
          boyExpression = "surprised";
        }

        const bx = cx - 20 * scaleBase;
        const by = cy - 30 * scaleBase + boyOffsetY;

        ctx!.fillStyle = "#f5cba7";
        ctx!.beginPath();
        ctx!.arc(bx, by - 70 * scaleBase, 32 * scaleBase, 0, Math.PI * 2);
        ctx!.fill();

        ctx!.fillStyle = NAVY;
        ctx!.beginPath();
        ctx!.arc(bx - 2 * scaleBase, by - 78 * scaleBase, 34 * scaleBase, Math.PI, Math.PI * 2.05);
        ctx!.fill();

        ctx!.fillStyle = NAVY;
        if (boyExpression === "happy") {
          const blink = t % 2.5 > 2.3 ? 1 : 4 * scaleBase;
          ctx!.fillRect(bx + 8 * scaleBase, by - 72 * scaleBase, 4 * scaleBase, blink);
          ctx!.fillRect(bx + 24 * scaleBase, by - 72 * scaleBase, 4 * scaleBase, blink);
        } else {
          ctx!.beginPath();
          ctx!.arc(bx + 10 * scaleBase, by - 70 * scaleBase, 5 * scaleBase, 0, Math.PI * 2);
          ctx!.arc(bx + 24 * scaleBase, by - 70 * scaleBase, 5 * scaleBase, 0, Math.PI * 2);
          ctx!.fill();
        }

        ctx!.fillStyle = "#3b82f6";
        ctx!.beginPath();
        ctx!.ellipse(bx, by + 15 * scaleBase, 45 * scaleBase, 50 * scaleBase, 0, 0, Math.PI * 2);
        ctx!.fill();

        ctx!.strokeStyle = "#f5cba7";
        ctx!.lineWidth = 14 * scaleBase;
        ctx!.lineCap = "round";
        ctx!.beginPath();
        if (boyExpression === "happy") {
          const typeWave = Math.sin(t * 15) * 4;
          ctx!.moveTo(bx - 20 * scaleBase, by + 10 * scaleBase);
          ctx!.lineTo(bx + 30 * scaleBase, by + 25 * scaleBase + typeWave);
        } else {
          ctx!.moveTo(bx - 25 * scaleBase, by + 5 * scaleBase);
          ctx!.lineTo(bx + 40 * scaleBase, by - 10 * scaleBase);
        }
        ctx!.stroke();

        ctx!.save();
        ctx!.translate(bx + 40 * scaleBase, laptopY);
        ctx!.rotate(laptopRot);

        ctx!.fillStyle = "#94a3b8";
        drawRoundedRect(ctx!, -60 * scaleBase, -70 * scaleBase, 110 * scaleBase, 70 * scaleBase, 6 * scaleBase);

        ctx!.fillStyle = "#1e293b";
        drawRoundedRect(ctx!, -55 * scaleBase, -65 * scaleBase, 100 * scaleBase, 60 * scaleBase, 4 * scaleBase);

        ctx!.fillStyle = ORANGE;
        ctx!.fillRect(-45 * scaleBase, -52 * scaleBase, 45 * scaleBase, 4 * scaleBase);
        ctx!.fillStyle = "#38bdf8";
        ctx!.fillRect(-45 * scaleBase, -42 * scaleBase, 65 * scaleBase, 4 * scaleBase);
        ctx!.fillRect(-45 * scaleBase, -32 * scaleBase, 30 * scaleBase, 4 * scaleBase);

        ctx!.fillStyle = "#cbd5e1";
        drawRoundedRect(ctx!, -70 * scaleBase, 0, 130 * scaleBase, 12 * scaleBase, 4 * scaleBase);

        ctx!.fillStyle = NAVY;
        for (let k = 0; k < 7; k++) {
          ctx!.fillRect((-50 + k * 16) * scaleBase, 3 * scaleBase, 12 * scaleBase, 5 * scaleBase);
        }

        ctx!.restore();
        ctx!.restore();
      }

      if (t >= 3.2) {
        const logoScale = Math.min(width, height) * 0.0022;
        const diamondSize = 65 * logoScale;
        const targetCenterX = cx;
        const targetCenterY = cy - 45 * logoScale;

        const navyTargetX = targetCenterX - 34 * logoScale;
        const navyTargetY = targetCenterY + 14 * logoScale;
        const orangeTargetX = targetCenterX + 34 * logoScale;
        const orangeTargetY = targetCenterY - 34 * logoScale;

        let k1X: number, k1Y: number, k1Rot: number, k1Scale: number, k1Morph: number;
        let k2X: number, k2Y: number, k2Rot: number, k2Scale: number, k2Morph: number;

        if (t < 6.5) {
          const bounceT = clamp((t - 3.2) / 3.3);

          k1X = cx - 180 * scaleBase + bounceT * 120 * scaleBase;
          k1Y = cy + 120 * scaleBase - Math.sin(bounceT * Math.PI * 2.5) * 70 * scaleBase * (1 - bounceT * 0.5);
          k1Rot = bounceT * Math.PI * 4;
          k1Scale = scaleBase * 0.8;
          k1Morph = 0;

          k2X = cx - 90 * scaleBase + bounceT * 180 * scaleBase;
          k2Y = cy + 100 * scaleBase - Math.sin(bounceT * Math.PI * 3 + 0.4) * 90 * scaleBase * (1 - bounceT * 0.4);
          k2Rot = -bounceT * Math.PI * 5;
          k2Scale = scaleBase * 0.8;
          k2Morph = 0;
        } else if (t < 8.8) {
          const zoomT = cubicEaseInOut((t - 6.5) / 2.3);

          const k1Start = { x: cx - 60 * scaleBase, y: cy + 110 * scaleBase, rot: Math.PI * 4 };
          const k2Start = { x: cx + 90 * scaleBase, y: cy + 90 * scaleBase, rot: -Math.PI * 5 };

          k1X = k1Start.x + (navyTargetX - k1Start.x) * zoomT;
          k1Y = k1Start.y + (navyTargetY - k1Start.y) * zoomT;
          k1Rot = k1Start.rot + (Math.PI / 4 - (k1Start.rot % (Math.PI * 2))) * zoomT;
          k1Scale = scaleBase * 0.8 + (logoScale - scaleBase * 0.8) * zoomT;
          k1Morph = 0;

          k2X = k2Start.x + (orangeTargetX - k2Start.x) * zoomT;
          k2Y = k2Start.y + (orangeTargetY - k2Start.y) * zoomT;
          k2Rot = k2Start.rot + (Math.PI / 4 - (k2Start.rot % (Math.PI * 2))) * zoomT;
          k2Scale = scaleBase * 0.8 + (logoScale - scaleBase * 0.8) * zoomT;
          k2Morph = 0;
        } else {
          const morphT = cubicEaseInOut(clamp((t - 8.8) / 1.8));

          k1X = navyTargetX;
          k1Y = navyTargetY;
          k1Rot = Math.PI / 4;
          k1Scale = logoScale;
          k1Morph = morphT;

          k2X = orangeTargetX;
          k2Y = orangeTargetY;
          k2Rot = Math.PI / 4;
          k2Scale = logoScale;
          k2Morph = morphT;
        }

        drawKeyOrDiamond(ctx!, {
          x: k1X, y: k1Y, size: diamondSize, rot: k1Rot, scale: k1Scale, morph: k1Morph,
          isFilled: false, mainColor: NAVY, letter: "S",
        });
        drawKeyOrDiamond(ctx!, {
          x: k2X, y: k2Y, size: diamondSize, rot: k2Rot, scale: k2Scale, morph: k2Morph,
          isFilled: true, mainColor: ORANGE, letter: "H",
        });

        if (t > 10.0) {
          const textT = cubicEaseInOut(clamp((t - 10.0) / 1.8));
          const textOffsetY = (1 - textT) * 25 * logoScale;
          const textAlpha = clamp(textT);

          ctx!.save();
          ctx!.globalAlpha = textAlpha;
          ctx!.textAlign = "center";
          ctx!.textBaseline = "middle";

          const textBaseY = targetCenterY + 115 * logoScale + textOffsetY;

          const font1Size = Math.round(52 * logoScale);
          ctx!.font = `800 ${font1Size}px 'Inter', system-ui, sans-serif`;
          ctx!.fillStyle = NAVY;
          ctx!.letterSpacing = `${3 * logoScale}px`;
          ctx!.fillText("SECONDHALF", targetCenterX, textBaseY);

          const font2Size = Math.round(21 * logoScale);
          ctx!.font = `600 ${font2Size}px 'Inter', system-ui, sans-serif`;
          ctx!.fillStyle = ORANGE;
          ctx!.letterSpacing = `${10 * logoScale}px`;
          ctx!.fillText("TECHNOLOGIES", targetCenterX, textBaseY + 48 * logoScale);

          ctx!.restore();
        }
      }
    }

    function tick(timestamp: number) {
      if (!lastTimestamp) lastTimestamp = timestamp;
      const deltaTime = (timestamp - lastTimestamp) / 1000;
      lastTimestamp = timestamp;

      currentTime += deltaTime;
      if (currentTime >= TOTAL_DURATION + LOOP_PAUSE) {
        currentTime = 0;
      }

      render(Math.min(currentTime, TOTAL_DURATION));
      rafId = requestAnimationFrame(tick);
    }

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    rafId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <div className={`relative w-full overflow-hidden ${className}`}>
      <canvas ref={canvasRef} className="block h-full w-full" />
    </div>
  );
}