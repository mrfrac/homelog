import { IndexController } from "./controllers/IndexController";

interface IRoute<T> {
  controller: {new (): T};
  action: keyof T;
  method: "get" | "post";
  route: string;
};

export default [{
  controller: IndexController,
  action: "index",
  method: "get",
  route: "/"
}] as IRoute<any>[];