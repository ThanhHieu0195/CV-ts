import { plainToClass } from "class-transformer";

const typeClass: any = plainToClass({
  name: "kai",
});

console.log(typeClass);
