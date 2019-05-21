import { TankController } from "./controllers/TankController";

interface IRoute<T> {
  controller: {new (): T};
  action: keyof T;
  method: "get" | "post";
  route: string;
};

export default [{
  controller: TankController,
  action: "get",
  method: "get",
  route: "/"
}] as IRoute<any>[];