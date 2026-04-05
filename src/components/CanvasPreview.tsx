import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import SectionHeading from "@/components/SectionHeading";
import wallBg from "@/assets/wall-background.jpg";
import galleryMural from "@/assets/canvas/canvas1.jpeg";
import gallerySpiritual from "@/assets/canvas/canvas3.jpg";
import galleryCanvas from "@/assets/canvas/canvas6.jpeg";
import galleryKids from "@/assets/wallarts/wall-art12.jpeg";
import galleryBapu from "@/assets/canvas/canvas7.jpeg";

const artworks = [
  
  { src: gallerySpiritual, label: "Ganesha" },
  { src: galleryCanvas, label: "Temple" },
  { src: galleryKids, label: "Kids Room" },
  { src: galleryBapu, label: "Bapu Style" },
  { src: galleryMural, label: "Cafe Mural" },
];

const frames = [
  { id: "black", label: "Black", style: "border-[12px] border-[#1a1a1a] shadow-[inset_0_0_8px_rgba(0,0,0,0.4)]" },
  { id: "wood", label: "Wood", style: "border-[14px] border-[#8B5E3C] shadow-[inset_0_0_8px_rgba(0,0,0,0.3)]" },
  { id: "white", label: "White", style: "border-[12px] border-white shadow-[inset_0_0_8px_rgba(0,0,0,0.15)]" },
  { id: "frameless", label: "Frameless", style: "border-[2px] border-transparent" },
];

const wallSizes = [
  { id: "small", label: "Small Wall", width: 1.2, height: 0.9, description: "Living room accent wall" },
  { id: "medium", label: "Medium Wall", width: 1.8, height: 1.2, description: "Bedroom or hallway" },
  { id: "large", label: "Large Wall", width: 2.4, height: 1.5, description: "Dining room or foyer" },
  { id: "xl", label: "Extra Large", width: 3.0, height: 1.8, description: "Commercial space" },
];

const CanvasPreview = () => {
  const [selectedArt, setSelectedArt] = useState(0);
  const [selectedFrame, setSelectedFrame] = useState(0);
  const [widthVal, setWidthVal] = useState([80]);
  const [heightVal, setHeightVal] = useState([60]);
  const [selectedWallSize, setSelectedWallSize] = useState<string | null>(null);

  const maxPx = 420;
  const currentWidth = maxPx * (widthVal[0] / 150);
  const currentHeight = maxPx * (heightVal[0] / 150);

  return (
    <section className="section-padding bg-warm">
      <div className="container-narrow">
        <SectionHeading
          title="Preview on Your Wall"
          subtitle="Visualize how our art looks in your space — pick artwork, frame & size"
        />

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8 items-start">
          {/* Wall Preview */}
          <div className="space-y-4">
            {selectedWallSize && (
              <div className="bg-background/80 backdrop-blur-sm rounded-lg p-4 border border-border">
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                  {wallSizes.find(w => w.id === selectedWallSize)?.label}
                </h3>
                <p className="text-sm text-muted-foreground">
                  Wall: {wallSizes.find(w => w.id === selectedWallSize)?.width} × {wallSizes.find(w => w.id === selectedWallSize)?.height} m
                  {" • "}
                  Canvas: {widthVal[0]} × {heightVal[0]} cm
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  {wallSizes.find(w => w.id === selectedWallSize)?.description}
                </p>
              </div>
            )}
            <div
              className="relative w-full aspect-[16/10] rounded-xl overflow-hidden shadow-lg"
              style={{
                backgroundImage: `url(${wallBg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
            {/* Canvas on wall */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className={`transition-all duration-500 ease-out ${frames[selectedFrame].style}`}
                style={{
                  width: `${currentWidth}px`,
                  height: `${currentHeight}px`,
                  maxWidth: "85%",
                  maxHeight: "85%",
                }}
              >
                <img
                  src={artworks[selectedArt].src}
                  alt={artworks[selectedArt].label}
                  className="w-full h-full object-cover block"
                  style={{
                    boxShadow: selectedFrame === 3
                      ? "4px 6px 20px rgba(0,0,0,0.35)"
                      : "none",
                  }}
                />
              </div>
              {/* Frame shadow on wall */}
              {selectedFrame !== 3 && (
                <div
                  className="absolute transition-all duration-500"
                  style={{
                    width: `${currentWidth + 8}px`,
                    maxWidth: "87%",
                    aspectRatio: "1",
                    boxShadow: "6px 8px 25px rgba(0,0,0,0.3)",
                    pointerEvents: "none",
                    zIndex: -1,
                  }}
                />
              )}
            </div>
          </div>
          </div>

          {/* Controls */}
          <div className="bg-background rounded-xl p-6 shadow-md border border-border space-y-6">
            {/* Wall Size Options */}
            <div>
              <h4 className="font-heading text-sm font-semibold text-foreground mb-3">
                Wall Size Options
              </h4>
              <div className="grid grid-cols-2 gap-2 mb-4">
                {wallSizes.map((wall) => (
                  <button
                    key={wall.id}
                    onClick={() => {
                      setSelectedWallSize(wall.id);
                      setWidthVal([Math.min(wall.width * 40, 150)]);
                      setHeightVal([Math.min(wall.height * 40, 150)]);
                    }}
                    className={`p-3 rounded-lg border transition-all duration-200 text-left ${
                      selectedWallSize === wall.id
                        ? "border-gold bg-gold/5 ring-1 ring-gold"
                        : "border-border hover:border-gold/50 hover:bg-muted/50"
                    }`}
                  >
                    <div className="font-semibold text-sm text-foreground mb-1">
                      {wall.label}
                    </div>
                    <div className="text-xs text-muted-foreground mb-1">
                      {wall.width} × {wall.height} m
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {wall.description}
                    </div>
                  </button>
                ))}
              </div>
              {selectedWallSize && (
                <div className="bg-gold/10 border border-gold/20 rounded-lg p-3 text-center">
                  <p className="text-sm font-semibold text-foreground">
                    Selected: {wallSizes.find(w => w.id === selectedWallSize)?.label}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Canvas: {widthVal[0]} × {heightVal[0]} cm on {wallSizes.find(w => w.id === selectedWallSize)?.width} × {wallSizes.find(w => w.id === selectedWallSize)?.height} m wall
                  </p>
                  <button
                    onClick={() => setSelectedWallSize(null)}
                    className="mt-2 text-xs text-gold hover:text-gold/80 underline"
                  >
                    Clear selection
                  </button>
                </div>
              )}
            </div>
            {/* Size Sliders */}
            <div>
              <h4 className="font-heading text-sm font-semibold text-foreground mb-3">
                Custom Canvas Dimensions
              </h4>

              {/* Dimensions display */}
              <div className="bg-muted/50 rounded-lg px-3 py-3 mb-4 text-center space-y-1">
                <p className="text-sm font-semibold text-foreground font-body">
                  {widthVal[0]} × {heightVal[0]} cm
                </p>
                <p className="text-sm font-body space-x-2">
                  <span className="bg-gold/15 text-gold px-2 py-0.5 rounded-full font-semibold">
                    {(widthVal[0] / 100).toFixed(2)} × {(heightVal[0] / 100).toFixed(2)} m
                  </span>
                  <span className="bg-gold/15 text-gold px-2 py-0.5 rounded-full font-semibold">
                    {(widthVal[0] / 2.54).toFixed(1)} × {(heightVal[0] / 2.54).toFixed(1)} in
                  </span>
                </p>
              </div>

              {/* Width slider */}
              <div className="mb-4">
                <div className="flex justify-between items-center mb-1.5">
                  <span className="text-xs text-muted-foreground font-body">Width</span>
                  <span className="text-xs font-semibold text-foreground font-body">{widthVal[0]} cm</span>
                </div>
                <Slider
                  value={widthVal}
                  onValueChange={setWidthVal}
                  min={20}
                  max={150}
                  step={5}
                  className="w-full"
                />
                <div className="flex justify-between mt-1">
                  <span className="text-[10px] text-muted-foreground">20 cm</span>
                  <span className="text-[10px] text-muted-foreground">150 cm</span>
                </div>
              </div>

              {/* Height slider */}
              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <span className="text-xs text-muted-foreground font-body">Height</span>
                  <span className="text-xs font-semibold text-foreground font-body">{heightVal[0]} cm</span>
                </div>
                <Slider
                  value={heightVal}
                  onValueChange={setHeightVal}
                  min={20}
                  max={150}
                  step={5}
                  className="w-full"
                />
                <div className="flex justify-between mt-1">
                  <span className="text-[10px] text-muted-foreground">20 cm</span>
                  <span className="text-[10px] text-muted-foreground">150 cm</span>
                </div>
              </div>
            </div>

            {/* Selected info */}
            <div className="pt-4 border-t border-border text-center">
              <p className="text-sm text-muted-foreground font-body">
                <span className="font-semibold text-foreground">{artworks[selectedArt].label}</span>
                {" · "}
                {frames[selectedFrame].label} Frame
              </p>
            </div>
            {/* Artwork Selection */}
            <div>
              <h4 className="font-heading text-sm font-semibold text-foreground mb-3">
                Select Artwork
              </h4>
              <div className="grid grid-cols-5 gap-2">
                {artworks.map((art, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedArt(i)}
                    className={`rounded-md overflow-hidden aspect-square transition-all duration-200 ${selectedArt === i
                        ? "ring-2 ring-gold ring-offset-2 ring-offset-background scale-105"
                        : "opacity-70 hover:opacity-100"
                      }`}
                  >
                    <img
                      src={art.src}
                      alt={art.label}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Frame Style */}
            <div>
              <h4 className="font-heading text-sm font-semibold text-foreground mb-3">
                Frame Style
              </h4>
              <div className="grid grid-cols-4 gap-2">
                {frames.map((frame, i) => (
                  <button
                    key={frame.id}
                    onClick={() => setSelectedFrame(i)}
                    className={`flex flex-col items-center gap-1.5 p-2 rounded-lg transition-all duration-200 ${selectedFrame === i
                        ? "bg-gold/10 ring-1 ring-gold"
                        : "hover:bg-muted"
                      }`}
                  >
                    <div
                      className={`w-8 h-8 rounded-sm ${frame.id === "black"
                          ? "bg-[#1a1a1a]"
                          : frame.id === "wood"
                            ? "bg-[#8B5E3C]"
                            : frame.id === "white"
                              ? "bg-white border border-border"
                              : "bg-muted border border-dashed border-muted-foreground/30"
                        }`}
                    />
                    <span className="text-xs text-muted-foreground font-body">
                      {frame.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>


          </div>
        </div>
      </div>
    </section>
  );
};

export default CanvasPreview;
