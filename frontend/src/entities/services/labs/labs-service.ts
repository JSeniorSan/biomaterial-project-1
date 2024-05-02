import $api from "@/entities/http";
export class WorksService {
  static getUserInfoAsTeacher(id: string) {
    return $api.get("/labs/styrol-polymerization-bulk/get-as-teacher", {
      params: {
        user_id: id,
      },
    });
  }
}
