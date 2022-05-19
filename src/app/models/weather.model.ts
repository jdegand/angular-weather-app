/* original from github is missing visibility property
{
   "cod":"200",
   "message":0.0032,
   "cnt":1,
   "list":[
      {
         "dt":1487246400,
         "main":{
            "temp":286.67,
            "temp_min":281.556,
            "temp_max":286.67,
            "pressure":972.73,
            "sea_level":1046.46,
            "grnd_level":972.73,
            "humidity":75,
            "temp_kf":5.11
         },
         "weather":[
            {
               "id":800,
               "main":"Clear",
               "description":"clear sky",
               "icon":"01d"
            }
         ],
         "clouds":{
            "all":0
         },
         "wind":{
            "speed":1.81,
            "deg":247.501
         },
         "sys":{
            "pod":"d"
         },
         "dt_txt":"2017-02-16 12:00:00"
      }
   ],
   "city":{
      "id":6940463,
      "name":"Altstadt",
      "coord":{
         "lat":48.137,
         "lon":11.5752
      },
      "country":"none"
   }
}
*/

export interface WeatherData {
    cod: string
    message: number
    cnt: number
    list: List[]
    city: City
  }
  
  export interface List {
    dt: number
    main: Main
    weather: Weather[]
    clouds: Clouds
    wind: Wind
    sys: Sys
    dt_txt: string
    visibility: number
  }
  
  export interface Main {
    temp: number
    temp_min: number
    temp_max: number
    pressure: number
    sea_level: number
    grnd_level: number
    humidity: number
    temp_kf: number
  }
  
  export interface Weather {
    id: number
    main: string
    description: string
    icon: string
  }
  
  export interface Clouds {
    all: number
  }
  
  export interface Wind {
    speed: number
    deg: number
  }
  
  export interface Sys {
    pod: string
  }
  
  export interface City {
    id: number
    name: string
    coord: Coord
    country: string
  }
  
  export interface Coord {
    lat: number
    lon: number
  }
  