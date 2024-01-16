import moment from "moment"
import { Hour } from "./types";

/**
 * 1 - Fazer um map para adicionar se é aberto ou fechado
 * 2 - Comparar o Dia de Hoje com os dias do Array e a Hora
 */

export function isOpened(hours: Hour[]){
  const todayDay = moment().day();
  const verifyTodayIsOpened = hours.some((hour) => {
    return hour.days.includes(todayDay + 1);
  })

  const verifyHourIsOpened = hours.some((hour) => {
    const dateHourFrom = moment(hour.from, "HH:mm")
    const dateHourTo = moment(hour.to, "HH:mm")
    const actualDate = moment()
    if(dateHourTo.isSameOrBefore(dateHourFrom)){
      return actualDate.isSameOrAfter(dateHourFrom) && actualDate.isBefore(dateHourTo.add(1, 'days'))
    }
    return actualDate.isSameOrAfter(dateHourFrom) && actualDate.isBefore(dateHourTo);
  })

  return verifyHourIsOpened && verifyTodayIsOpened;
}