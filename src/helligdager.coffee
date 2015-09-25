moment = require 'moment'

Holidays =
  easter: (year) ->
    a = year % 19
    b = Math.floor(year / 100)
    c = year % 100
    d = Math.floor(b / 4)
    e = b % 4
    f = Math.floor((b + 8) / 25)
    g = Math.floor((b - f + 1) / 3)
    h = (19 * a + b - d - g + 15) % 30
    i = Math.floor(c / 4)
    k = c % 4
    l = (32 + 2 * e + 2 * i - h - k) % 7
    m = Math.floor((a + 11 * h + 22 * l) / 451)
    n0 = (h + l + 7 * m + 114)
    n = Math.floor(n0 / 31) - 1
    p = n0 % 31 + 1
    new Date(year,n,p)

  by_year: (year) ->
    [
      {
        name: "Palmesøndag"
        date: moment(@easter(year)).subtract(7, "days").format("YYYY-MM-DD")
      }
      {
        name: "Skjærtorsdag"
        date: moment(@easter(year)).subtract(3, "days").format("YYYY-MM-DD")
      }
      {
        name: "Langfredag"
        date: moment(@easter(year)).subtract(2, "days").format("YYYY-MM-DD")
      }
      {
        name: "1. påskedag"
        date: moment(@easter(year)).format("YYYY-MM-DD")
      }
      {
        name: "2. påskedag"
        date: moment(@easter(year)).add(1, "days").format("YYYY-MM-DD")
      }
      {
        name: "Kristi Himmelsprettsdag"
        date: moment(@easter(year)).add(39, "days").format("YYYY-MM-DD")
      }
      {
        name: "1. pinsedag"
        date: moment(@easter(year)).add(49, "days").format("YYYY-MM-DD")
      }
      {
        name: "2. pinsedag"
        date: moment(@easter(year)).add(50, "days").format("YYYY-MM-DD")
      }
      {
        name: "Nyttårsdag"
        date: moment().year(year).startOf("year").format("YYYY-MM-DD")
      }
      {
        name: "1. mai"
        date: moment().year(year).month("may").date(1).format("YYYY-MM-DD")
      }
      {
        name: "17. mai"
        date: moment().year(year).month("may").date(17).format("YYYY-MM-DD")
      }
      {
        name: "1. juledag"
        date: moment().year(year).month("december").date(25)
                      .format("YYYY-MM-DD")
      }
      {
        name: "2. juledag"
        date: moment().year(year).month("december").date(26)
                      .format("YYYY-MM-DD")
      }
      {
        name: "Nyttårsaften"
        date: moment().year(year).month("december").date(31)
                      .format("YYYY-MM-DD")
      }
    ]

module.exports = Holidays
