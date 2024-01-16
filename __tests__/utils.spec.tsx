import { Days } from "@/app/libs/types";
import { isOpened } from "@/app/libs/utils";

describe('isOpened', () => {
  jest
  .useFakeTimers()
  .setSystemTime(new Date('2024-01-01 13:00:00'));

  it('Should return true', () => {
    const opened = isOpened([{
      "from": '10:00',
      "to": '22:00',
      "days": [Days.DOMINGO,Days.QUINTA,Days.SEXTA]
    },
    {
      "from": '05:00',
      "to": '13:00',
      "days": [Days.SEGUNDA,Days.QUARTA,Days.SABADO]
    }])

    expect(opened).toBe(true)
  })

  it('Should return false', () => {
    const opened = isOpened([ {
      "from": '10:00',
      "to": '21:00',
      "days": [Days.DOMINGO,Days.QUINTA,Days.SEXTA]
    }])

    expect(opened).toBe(false)
  })

  it('Should return true with is dawn', () => {
    const opened = isOpened([ {
      "from": '10:00',
      "to": '01:00',
      "days": [Days.SEGUNDA]
    }])

    expect(opened).toBe(true)
  })
})