import { Model } from "objection";
import { toTime, toDate } from "../utils";

export class User extends Model {
    readonly id!: string;
    id_user!: string;
    name!: string;
    password!: string;
    createdAt?: Date;
    updatedAt?: Date;

    static get tableName() {
        return "userApi"
    }

    $beforeInsert() {
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }

    $beforeUpdate() {
        this.updatedAt = new Date();
    }

    $parseDatabaseJson(json: object) {
        json = super.$parseDatabaseJson(json);
        toDate(json, "createdAt");
        toDate(json, "updatedAt");
        return json;
    }

    $formatDatabaseJson(json: object) {
        json = super.$formatDatabaseJson(json);
        toTime(json, "createdAt");
        toTime(json, "updatedAt");
        return json;
    }

    save() {
        return super.$transaction().insert(this);
    }
}