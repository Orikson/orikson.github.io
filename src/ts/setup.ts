import {
  ArcRotateCamera,
  Color3,
  Color4,
  Engine,
  HemisphericLight,
  MeshBuilder,
  Scene,
  Vector3,
} from "@babylonjs/core";
import { Momentum } from "./momentum";

export function createScene(canvas: HTMLCanvasElement) {
  const engine = new Engine(canvas);
  const scene = new Scene(engine);

  scene.clearColor = new Color4(0, 0, 0, 0);

  const camera = new ArcRotateCamera(
    "camera",
    Math.PI / 3,
    Math.PI / 2,
    5,
    Vector3.Zero(),
    scene
  );

  const light = new HemisphericLight("light", Vector3.Up(), scene);
  light.diffuse = new Color3(29 / 128, 78 / 128, 216 / 128);
  light.specular = new Color3(29 / 128, 78 / 128, 216 / 128);
  light.intensity = 0.7;

  const sphere = MeshBuilder.CreateSphere("sphere", { diameter: 1 }, scene);
  sphere.position.x = -2;
  sphere.rotation = new Vector3(0, 0, 0);
  const box = MeshBuilder.CreateBox("box", { size: 1 }, scene);
  box.position.y = -1.5;
  box.position.x = -2;
  sphere.rotation = new Vector3(0, 0, 0);

  const cameraMomentum = new Momentum((x: number) => {
    sphere.position.y = x;
    sphere.rotation.y = x % (2 * Math.PI);
    box.position.y = x - 1.5;
    box.rotation.y = x % (2 * Math.PI);
  }, 0.95);

  canvas.addEventListener("wheel", (ev) => {
    cameraMomentum.impulse(ev.deltaY / 1000);
  });

  engine.runRenderLoop(() => {
    engine.resize();
    cameraMomentum.update();
    scene.render();
  });

  return { scene, engine };
}
