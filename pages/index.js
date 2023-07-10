import { Worker, Viewer } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { highlightPlugin } from "@react-pdf-viewer/highlight";
import "@react-pdf-viewer/highlight/lib/styles/index.css";

export default function App() {
  const data = {
    text: "The requirements include...",
    sourceDocuments: [
      {
        pageContent:
          "Functionality requirements, backend functionality\nUser data information\nAbility to collect and sort...",
        metadata: { "loc.lines.from": 161, "loc.lines.to": 173 },
      },
    ],
  };

  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  const highlightPluginInstance = highlightPlugin();

  return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
      <div style={{ height: "720px" }}>
        <Viewer fileUrl={"Brief.pdf"} plugins={[defaultLayoutPluginInstance]} />
      </div>
    </Worker>
  );
}
