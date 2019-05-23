import { TankController } from "./controllers/TankController";

interface IRoute<T> {
  controller: {new (): T};
  action: keyof T;
  method: "get" | "post";
  path: string;
}

export default [{
  controller: TankController,
  action: "listAll",
  method: "get",
  path: "/tank"
}] as IRoute<any>[];
