import '@google/model-viewer';

const ARFlooringVisualizer = () => {
  return (
    <div>
      <h1>AR Flooring Visualizer</h1>
      <model-viewer
        src="/ImageToStl.com_carpet 04.glb"
        ios-src="/uploads_files_3660386_usdz.usdz"
        alt="AR Flooring"
        ar
        ar-modes="scene-viewer quick-look"
        camera-controls
        auto-rotate
        style={{ width: '100%', height: '500px' }}
      >
        <button slot="ar-button">View in AR</button>
      </model-viewer>
    </div>
  );
};

export default ARFlooringVisualizer;
