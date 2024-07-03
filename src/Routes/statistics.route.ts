import { NextFunction, Request, Response } from "express";



import { User } from "../Modules/Users/user.model";



import { raw } from "objection";
import moment from "moment";
import Management from "../Modules/Type/type.model";


export const GetStatics = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const users = await User.query()
    .count()
    .then((rows: any) => Number(rows[0].count));

  const todayusers = await User.query()
    .where(
      "created_at",
      ">",
      new Date().toISOString().slice(0, 10) + " 00:00:00"
    )
    .count()
    .then((rows: any) => Number(rows[0].count));



  const statistics = {

    management :0,
    users,
    Departments:0,
    todayusers,
  
    //   mailto:mailStatistics,
  };

  res.json(statistics);
};
