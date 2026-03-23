(function emulatePreviewMode() {
  const STYLE_ID = "preview-emulation-style";
  const MOBILE_ID = "mobile-preview";
  const TABLET_ID = "tablet-preview";

  const params = new URLSearchParams(window.location.search);
  const fromQuery = (params.get("preview") || "").toLowerCase();
  const fromHash = (window.location.hash || "").toLowerCase();

  const mode = (fromQuery === "tablet" || fromHash.includes("tablet-preview"))
    ? "tablet"
    : "mobile";

  const previewId = mode === "tablet" ? TABLET_ID : MOBILE_ID;
  const previewWidth = mode === "tablet" ? 768 : 390;

  const existingMobile = document.getElementById(MOBILE_ID);
  const existingTablet = document.getElementById(TABLET_ID);
  const existing = existingMobile || existingTablet;

  if (existing && existing.id !== previewId) {
    existing.id = previewId;
  }

  let wrapper = document.getElementById(previewId);

  if (!wrapper) {
    wrapper = document.createElement("div");
    wrapper.id = previewId;

    const currentChildren = Array.from(document.body.childNodes);
    for (const node of currentChildren) {
      if (node !== wrapper) {
        wrapper.appendChild(node);
      }
    }

    document.body.appendChild(wrapper);
  }

  let style = document.getElementById(STYLE_ID);
  if (!style) {
    style = document.createElement("style");
    style.id = STYLE_ID;
    document.head.appendChild(style);
  }

  style.textContent = "" +
    "html, body {" +
    "  margin: 0 !important;" +
    "  padding: 0 !important;" +
    "  width: 100% !important;" +
    "  min-height: 100vh !important;" +
    "  display: flex !important;" +
    "  justify-content: center !important;" +
    "  align-items: flex-start !important;" +
    "  background: #1a1a1a !important;" +
    "}" +
    "#mobile-preview, #tablet-preview {" +
    "  background: #ffffff !important;" +
    "  min-height: 100vh !important;" +
    "  margin: 0 auto !important;" +
    "  overflow-x: hidden !important;" +
    "  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.45), 0 0 0 1px rgba(255, 255, 255, 0.08) !important;" +
    "  flex-shrink: 0 !important;" +
    "}" +
    "#" + previewId + " {" +
    "  width: " + previewWidth + "px !important;" +
    "}";

  window.__previewMode = mode;
  window.__previewWidth = previewWidth;

  console.info("[emulate] Applied", { mode: mode, width: previewWidth, selector: "#" + previewId });
})();
