import {StudentType} from "../02/02";
import {GoverBuildingType, HouseType} from "../02/02_02";

debugger
export const sum = (a:number, b:number) => {
    return a+b;
}

export const addSkill = (st: StudentType, skill: string) => {
    st.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}
export function makeStudentActive(s: StudentType) {
    s.isActive = true
}

export const doesStudentLiveIn = (s:StudentType, cityName:string) => {
    return s.address.city.title === cityName;
}

export const addMoneyToBudget = (gb: GoverBuildingType, money: number) => {
    gb.budget += money;
}

export const repairHouse = (houseType: HouseType) => {
    houseType.repaired = true;
}

export const toFireStaff = (gb: GoverBuildingType, staff: number) => {
    gb.staffCount -= staff
}

export const toHireStaff = (gb: GoverBuildingType, staff: number) => {
    gb.staffCount += staff
}