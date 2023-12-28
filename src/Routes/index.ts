import { Router } from "express";
import { errorHandler } from "../Middlewares/error.handler";
import { JWT } from "../Middlewares/Jwt";
import { Locale } from "../Middlewares/locale";
import { RoleMiddleware } from "../Middlewares/RoleMiddleware";
import { PublicAuthRoutes } from "../Modules/Auth/auth.routs";
import { AdminUserRoutes, UserRoutes } from "../Modules/Users/user.routes";



import { AdminFeadbackRoutes, PublicFeadbackRoutes } from "../Modules/Feedback/feedback.routes";


import { AdminSystemInfoRoutes, PublicSystemInfoRoutes } from "../Modules/SystemInfo/systemInfo.routes";


import { me } from "../Modules/Auth/me";
import { logout } from "../Modules/Auth/logout";

import { AdminManagementRoutes, PublicManagementRoutes } from "../Modules/Management/management.routes";
import { AdminDepartmentRoutes, PublicDepartmentRoutes } from "../Modules/Department/department.routes";
import { AdminEmployRoutes } from "../Modules/employ/employ.routes";
import { AdminEmployRightToSignRoutes } from "../Modules/EmployRightToSign/EmployRightToSign.routes";
import { AdminEmployPersonalCommitmentsRoutes } from "../Modules/EmployPersonalCommitments/EmployPersonalCommitments.routes";
import { AdminEmployPerformanceEvaluationRoutes } from "../Modules/EmployPerformanceEvaluation/EmployPerformanceEvaluation.routes";
import { AdminEmploymentVacationsRoutes } from "../Modules/EmploymentVacations/EmploymentVacations.routes";
import { AdminEmploymentTransportationRoutes } from "../Modules/EmploymentTransportation/EmploymentTransportation.routes";
import { AdminEmploymentscientificsessionsRoutes } from "../Modules/Employmentscientificsessions/Employmentscientificsessions.routes";
import { AdminEmploymentPromotionsRoutes } from "../Modules/EmploymentPromotions/EmploymentPromotions.routes";
import { AdminEmploymentPenaltiesRoutes } from "../Modules/EmploymentPenalties/EmploymentPenalties.routes";
import { AdminEmploymentHealthInsuranceRoutes } from "../Modules/EmploymentHealthInsurance/EmploymentHealthInsurance.routes";
import { AdminEmploymentDocumentsRoutes } from "../Modules/EmploymentDocuments/EmploymentDocuments.routes";
import { AdminEmploymentCommitteesRoutes } from "../Modules/EmploymentCommittees/EmploymentCommittees.routes";
import { AdminEmploymentAcademicQualificationsRoutes } from "../Modules/EmploymentAcademicQualifications/EmploymentAcademicQualifications.routes";
import { AdminEmployFunctionRoutes } from "../Modules/EmployFunction/EmployFunction.routes";
import { AdminEmployEctRoutes } from "../Modules/EmployEct/EmployEct.routes";
import { GetStatics } from "./statistics.route";



export const applyRoutes = (): Router => {
  const router = Router();

  /**
   * -------------------------------------------------------
   * Authentication, Authorization and locale middlewares are first
   * to be registered on the Router
   * -------------------------------------------------------
   * */
  // TODO: add (authentication) and locale middlewares here

  router.use(Locale);

  /**
   * -------------------------------------------------------
   * All application routes can go here
   * -------------------------------------------------------
   * */
  const prefix = "/api/v1";

  const user_prefix = prefix + "/user"; // domain:8000/api/v1/user
  const admin_prefix = prefix + "/admin"; 
  /**
   * ------------------------------------------------------------------------------
   *  PUBLIC ROUTES
   * ------------------------------------------------------------------------------
   */
  // domain:8000/api/v1
  // insert any public middlewares above this line;

  PublicAuthRoutes(router, prefix);
  router.use(JWT);

  PublicSystemInfoRoutes(router, prefix);



  // PublicManagementRoutes(router, prefix);

  // PublicDepartmentRoutes(router, prefix);

  /**
   * ------------------------------------------------------------------------------
   *  USER ROUTES
   * ------------------------------------------------------------------------------
   */
  // router.use(user_prefix, RoleMiddleware(2));



  router.get(`${prefix}/me`, me);

  router.get(`${prefix}/logout`, logout);

 
  /**
   * ------------------------------------------------------------------------------
   *  ADMIN ROUTES
   * ------------------------------------------------------------------------------
   */
  router.use( admin_prefix, RoleMiddleware('admin'));
  AdminEmployRoutes(router, admin_prefix);
  AdminEmploymentAcademicQualificationsRoutes(router, admin_prefix);
  AdminEmploymentCommitteesRoutes(router, admin_prefix);
  AdminEmploymentPenaltiesRoutes(router, admin_prefix)
  AdminEmployFunctionRoutes(router, admin_prefix);
  AdminEmployPersonalCommitmentsRoutes(router, admin_prefix);
  AdminEmployPerformanceEvaluationRoutes(router, admin_prefix);
  AdminEmploymentHealthInsuranceRoutes(router, admin_prefix);
  AdminEmploymentTransportationRoutes(router, admin_prefix);
  AdminEmployEctRoutes(router, admin_prefix);
  AdminEmployRightToSignRoutes(router, admin_prefix);
  AdminEmploymentVacationsRoutes(router, admin_prefix);
  AdminEmploymentDocumentsRoutes(router, admin_prefix);
  AdminEmploymentscientificsessionsRoutes(router, admin_prefix)
  AdminEmploymentPromotionsRoutes(router, admin_prefix);

  AdminSystemInfoRoutes(router, admin_prefix);
  AdminDepartmentRoutes(router, admin_prefix)
  AdminManagementRoutes(router, admin_prefix);
  AdminUserRoutes(router, admin_prefix);
  AdminFeadbackRoutes(router, admin_prefix);
  router.get(`${admin_prefix}/statistics`, GetStatics);
  /**
   * ------------------------------------------------------------------------------
   * !!!! The Error handler is the last middleware on the router !!!!
   * ------------------------------------------------------------------------------
   * */
  router.use(errorHandler);

  return router;
};
