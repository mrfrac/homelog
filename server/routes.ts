import { TankController } from "./controllers/TankController";

interface IRoute<T> {
  controller: {new (): T};
  action: keyof T;
  method: "get" | "post";
  path: string;
}

export default [{
  controller: TankController,
  action: "get",
  method: "get",
  path: "/"
}] as IRoute<any>[];
