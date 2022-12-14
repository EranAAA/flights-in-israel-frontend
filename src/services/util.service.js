export const utilService = {
   makeId,
   makeLorem,
   getRandomIntInclusive,
   formatTimeToDM,
   getPosition,
   calcTextareaHeight,
   getTimeAgo,
   isImage,
   getDateTimeFormat,
   getYearMonthFormat,
   getTimeFormat,
   getNewDateTime,
   getDemoImages,
   getExtension,
   getDeomoDate,
   getFlightList,
   getAirLineLogo,
   getFlightStatisticByAirline,
   formatAsPercent
}

function makeId(length = 6) {
   var txt = ''
   var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

   for (var i = 0; i < length; i++) {
      txt += possible.charAt(Math.floor(Math.random() * possible.length))
   }

   return txt
}

function makeLorem(size = 100) {
   var words = ['The sky', 'above', 'the port', 'was', 'the color of television', 'tuned', 'to', 'a dead channel', '.', 'All', 'this happened', 'more or less', '.', 'I', 'had', 'the story', 'bit by bit', 'from various people', 'and', 'as generally', 'happens', 'in such cases', 'each time', 'it', 'was', 'a different story', '.', 'It', 'was', 'a pleasure', 'to', 'burn']
   var txt = ''
   while (size > 0) {
      size--
      txt += words[Math.floor(Math.random() * words.length)] + ' '
   }
   return txt
}

function getRandomIntInclusive(min, max) {
   min = Math.ceil(min)
   max = Math.floor(max)
   return Math.floor(Math.random() * (max - min + 1)) + min //The maximum is inclusive and the minimum is inclusive 
}

function formatTimeToDM(time) {
   var date = new Date(time)
   var month = date.getMonth(date)
   var day = date.getDate(date)
   const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
   return `${monthNames[month]} ${day}`
}

function getPosition(element) {
   if (!element) return
   let { top, left } = element.getBoundingClientRect()
   return { top, left }
}

function calcTextareaHeight(value, minHeight, lineHeight) {
   const numberOfLineBreaks = (value.match(/\n/g) || []).length
   return minHeight + numberOfLineBreaks * lineHeight  // min-height + num + numOfLineBreaks * line-height
}

function getTimeAgo(timestamp, locale = 'en') {
   let value
   const diff = Math.floor((Date.now() - timestamp) / 1000)
   const minutes = Math.floor(diff / 60)
   const hours = Math.floor(minutes / 60)
   const days = Math.floor(hours / 24)
   const months = Math.floor(days / 30)
   const years = Math.floor(months / 12)
   const rtf = new Intl.RelativeTimeFormat(locale, { numeric: "auto" })

   if (years > 0) {
      value = rtf.format(0 - years, "year")
   } else if (months > 0) {
      value = rtf.format(0 - months, "month")
   } else if (days > 0) {
      value = rtf.format(0 - days, "day")
   } else if (hours > 0) {
      value = rtf.format(0 - hours, "hour")
   } else if (minutes > 0) {
      value = rtf.format(0 - minutes, "minute")
   } else {
      // value = rtf.format(0 - diff, "second")
      value = 'Just now'
   }
   return value
}

function isImage(url) {
   return /\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(url)
}

function getDateTimeFormat(date) {
   const now = new Date()
   const month = new Intl.DateTimeFormat('en', { month: 'short' })
   const day = new Intl.DateTimeFormat('en', { day: '2-digit' })
   const time = new Intl.DateTimeFormat('he', { hour: 'numeric', minute: 'numeric' })
   const displayDate = `${month.format(date)} ${day.format(date)} at ${time.format(date)}`
   const displayDateOnly = `${day.format(date)} ${month.format(date)}`
   const statusDate = date > now.setHours(23, 59, 59, 59)
      ? ''
      : (date > Date.now()
         ? 'duesoon'
         : 'overdue')

   return { displayDate, statusDate, displayDateOnly }
}

function getYearMonthFormat(date) {
   const month = new Intl.DateTimeFormat('en', { month: 'short' })
   const year = new Intl.DateTimeFormat('he', { year: 'numeric' })
   const displayDate = `${month.format(date)} ${year.format(date)}`

   return displayDate
}

function getTimeFormat(date) {
   const time = new Intl.DateTimeFormat('he', { hour: 'numeric', minute: 'numeric' })
   return time.format(date)
}

function getNewDateTime(date, time) {

   const milliseconds = (h, m, s) => ((h * 60 * 60 + m * 60 + s) * 1000)
   const timeParts = time.split(":")
   let newDate = new Date(date)
   newDate = newDate.setHours(0, 0, 0)

   return milliseconds(timeParts[0], timeParts[1], 0) + newDate
}

function getDemoImages() {
   return [
      {
         "raw": "https://images.unsplash.com/photo-1627483262769-04d0a1401487?ixid=MnwzMzQ4MjB8MXwxfHNlYXJjaHwxfHxiYWNrZ3JvdW5kfGVufDB8fHx8MTY1NDM2NTQwNg&ixlib=rb-1.2.1",
         "full": "https://images.unsplash.com/photo-1627483262769-04d0a1401487?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMzQ4MjB8MXwxfHNlYXJjaHwxfHxiYWNrZ3JvdW5kfGVufDB8fHx8MTY1NDM2NTQwNg&ixlib=rb-1.2.1&q=80",
         "regular": "https://images.unsplash.com/photo-1627483262769-04d0a1401487?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzQ4MjB8MXwxfHNlYXJjaHwxfHxiYWNrZ3JvdW5kfGVufDB8fHx8MTY1NDM2NTQwNg&ixlib=rb-1.2.1&q=80&w=1080",
         "small": "https://images.unsplash.com/photo-1627483262769-04d0a1401487?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzQ4MjB8MXwxfHNlYXJjaHwxfHxiYWNrZ3JvdW5kfGVufDB8fHx8MTY1NDM2NTQwNg&ixlib=rb-1.2.1&q=80&w=400",
         "thumb": "https://images.unsplash.com/photo-1627483262769-04d0a1401487?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzQ4MjB8MXwxfHNlYXJjaHwxfHxiYWNrZ3JvdW5kfGVufDB8fHx8MTY1NDM2NTQwNg&ixlib=rb-1.2.1&q=80&w=200",
         "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1627483262769-04d0a1401487"
      },
      {
         "raw": "https://images.unsplash.com/32/Mc8kW4x9Q3aRR3RkP5Im_IMG_4417.jpg?ixid=MnwzMzQ4MjB8MHwxfHNlYXJjaHwyfHxiYWNrZ3JvdW5kfGVufDB8fHx8MTY1NDM2NTQwNg&ixlib=rb-1.2.1",
         "full": "https://images.unsplash.com/32/Mc8kW4x9Q3aRR3RkP5Im_IMG_4417.jpg?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMzQ4MjB8MHwxfHNlYXJjaHwyfHxiYWNrZ3JvdW5kfGVufDB8fHx8MTY1NDM2NTQwNg&ixlib=rb-1.2.1&q=80",
         "regular": "https://images.unsplash.com/32/Mc8kW4x9Q3aRR3RkP5Im_IMG_4417.jpg?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzQ4MjB8MHwxfHNlYXJjaHwyfHxiYWNrZ3JvdW5kfGVufDB8fHx8MTY1NDM2NTQwNg&ixlib=rb-1.2.1&q=80&w=1080",
         "small": "https://images.unsplash.com/32/Mc8kW4x9Q3aRR3RkP5Im_IMG_4417.jpg?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzQ4MjB8MHwxfHNlYXJjaHwyfHxiYWNrZ3JvdW5kfGVufDB8fHx8MTY1NDM2NTQwNg&ixlib=rb-1.2.1&q=80&w=400",
         "thumb": "https://images.unsplash.com/32/Mc8kW4x9Q3aRR3RkP5Im_IMG_4417.jpg?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzQ4MjB8MHwxfHNlYXJjaHwyfHxiYWNrZ3JvdW5kfGVufDB8fHx8MTY1NDM2NTQwNg&ixlib=rb-1.2.1&q=80&w=200",
         "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/32/Mc8kW4x9Q3aRR3RkP5Im_IMG_4417.jpg"
      },
      {
         "raw": "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?ixid=MnwzMzQ4MjB8MHwxfHNlYXJjaHwzfHxiYWNrZ3JvdW5kfGVufDB8fHx8MTY1NDM2NTQwNg&ixlib=rb-1.2.1",
         "full": "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMzQ4MjB8MHwxfHNlYXJjaHwzfHxiYWNrZ3JvdW5kfGVufDB8fHx8MTY1NDM2NTQwNg&ixlib=rb-1.2.1&q=80",
         "regular": "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzQ4MjB8MHwxfHNlYXJjaHwzfHxiYWNrZ3JvdW5kfGVufDB8fHx8MTY1NDM2NTQwNg&ixlib=rb-1.2.1&q=80&w=1080",
         "small": "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzQ4MjB8MHwxfHNlYXJjaHwzfHxiYWNrZ3JvdW5kfGVufDB8fHx8MTY1NDM2NTQwNg&ixlib=rb-1.2.1&q=80&w=400",
         "thumb": "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzQ4MjB8MHwxfHNlYXJjaHwzfHxiYWNrZ3JvdW5kfGVufDB8fHx8MTY1NDM2NTQwNg&ixlib=rb-1.2.1&q=80&w=200",
         "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1478760329108-5c3ed9d495a0"
      },
      {
         "raw": "https://images.unsplash.com/photo-1531685250784-7569952593d2?ixid=MnwzMzQ4MjB8MHwxfHNlYXJjaHw0fHxiYWNrZ3JvdW5kfGVufDB8fHx8MTY1NDM2NTQwNg&ixlib=rb-1.2.1",
         "full": "https://images.unsplash.com/photo-1531685250784-7569952593d2?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMzQ4MjB8MHwxfHNlYXJjaHw0fHxiYWNrZ3JvdW5kfGVufDB8fHx8MTY1NDM2NTQwNg&ixlib=rb-1.2.1&q=80",
         "regular": "https://images.unsplash.com/photo-1531685250784-7569952593d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzQ4MjB8MHwxfHNlYXJjaHw0fHxiYWNrZ3JvdW5kfGVufDB8fHx8MTY1NDM2NTQwNg&ixlib=rb-1.2.1&q=80&w=1080",
         "small": "https://images.unsplash.com/photo-1531685250784-7569952593d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzQ4MjB8MHwxfHNlYXJjaHw0fHxiYWNrZ3JvdW5kfGVufDB8fHx8MTY1NDM2NTQwNg&ixlib=rb-1.2.1&q=80&w=400",
         "thumb": "https://images.unsplash.com/photo-1531685250784-7569952593d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzQ4MjB8MHwxfHNlYXJjaHw0fHxiYWNrZ3JvdW5kfGVufDB8fHx8MTY1NDM2NTQwNg&ixlib=rb-1.2.1&q=80&w=200",
         "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1531685250784-7569952593d2"
      },
      {
         "raw": "https://images.unsplash.com/photo-1531315630201-bb15abeb1653?ixid=MnwzMzQ4MjB8MHwxfHNlYXJjaHw1fHxiYWNrZ3JvdW5kfGVufDB8fHx8MTY1NDM2NTQwNg&ixlib=rb-1.2.1",
         "full": "https://images.unsplash.com/photo-1531315630201-bb15abeb1653?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMzQ4MjB8MHwxfHNlYXJjaHw1fHxiYWNrZ3JvdW5kfGVufDB8fHx8MTY1NDM2NTQwNg&ixlib=rb-1.2.1&q=80",
         "regular": "https://images.unsplash.com/photo-1531315630201-bb15abeb1653?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzQ4MjB8MHwxfHNlYXJjaHw1fHxiYWNrZ3JvdW5kfGVufDB8fHx8MTY1NDM2NTQwNg&ixlib=rb-1.2.1&q=80&w=1080",
         "small": "https://images.unsplash.com/photo-1531315630201-bb15abeb1653?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzQ4MjB8MHwxfHNlYXJjaHw1fHxiYWNrZ3JvdW5kfGVufDB8fHx8MTY1NDM2NTQwNg&ixlib=rb-1.2.1&q=80&w=400",
         "thumb": "https://images.unsplash.com/photo-1531315630201-bb15abeb1653?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzQ4MjB8MHwxfHNlYXJjaHw1fHxiYWNrZ3JvdW5kfGVufDB8fHx8MTY1NDM2NTQwNg&ixlib=rb-1.2.1&q=80&w=200",
         "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1531315630201-bb15abeb1653"
      },
      {
         "raw": "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?ixid=MnwzMzQ4MjB8MHwxfHNlYXJjaHw2fHxiYWNrZ3JvdW5kfGVufDB8fHx8MTY1NDM2NTQwNg&ixlib=rb-1.2.1",
         "full": "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMzQ4MjB8MHwxfHNlYXJjaHw2fHxiYWNrZ3JvdW5kfGVufDB8fHx8MTY1NDM2NTQwNg&ixlib=rb-1.2.1&q=80",
         "regular": "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzQ4MjB8MHwxfHNlYXJjaHw2fHxiYWNrZ3JvdW5kfGVufDB8fHx8MTY1NDM2NTQwNg&ixlib=rb-1.2.1&q=80&w=1080",
         "small": "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzQ4MjB8MHwxfHNlYXJjaHw2fHxiYWNrZ3JvdW5kfGVufDB8fHx8MTY1NDM2NTQwNg&ixlib=rb-1.2.1&q=80&w=400",
         "thumb": "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzQ4MjB8MHwxfHNlYXJjaHw2fHxiYWNrZ3JvdW5kfGVufDB8fHx8MTY1NDM2NTQwNg&ixlib=rb-1.2.1&q=80&w=200",
         "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1528459801416-a9e53bbf4e17"
      },
      {
         "raw": "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?ixid=MnwzMzQ4MjB8MHwxfHNlYXJjaHw3fHxiYWNrZ3JvdW5kfGVufDB8fHx8MTY1NDM2NTQwNg&ixlib=rb-1.2.1",
         "full": "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMzQ4MjB8MHwxfHNlYXJjaHw3fHxiYWNrZ3JvdW5kfGVufDB8fHx8MTY1NDM2NTQwNg&ixlib=rb-1.2.1&q=80",
         "regular": "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzQ4MjB8MHwxfHNlYXJjaHw3fHxiYWNrZ3JvdW5kfGVufDB8fHx8MTY1NDM2NTQwNg&ixlib=rb-1.2.1&q=80&w=1080",
         "small": "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzQ4MjB8MHwxfHNlYXJjaHw3fHxiYWNrZ3JvdW5kfGVufDB8fHx8MTY1NDM2NTQwNg&ixlib=rb-1.2.1&q=80&w=400",
         "thumb": "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzQ4MjB8MHwxfHNlYXJjaHw3fHxiYWNrZ3JvdW5kfGVufDB8fHx8MTY1NDM2NTQwNg&ixlib=rb-1.2.1&q=80&w=200",
         "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1558591710-4b4a1ae0f04d"
      },
      {
         "raw": "https://images.unsplash.com/photo-1627483262268-9c2b5b2834b5?ixid=MnwzMzQ4MjB8MXwxfHNlYXJjaHw4fHxiYWNrZ3JvdW5kfGVufDB8fHx8MTY1NDM2NTQwNg&ixlib=rb-1.2.1",
         "full": "https://images.unsplash.com/photo-1627483262268-9c2b5b2834b5?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMzQ4MjB8MXwxfHNlYXJjaHw4fHxiYWNrZ3JvdW5kfGVufDB8fHx8MTY1NDM2NTQwNg&ixlib=rb-1.2.1&q=80",
         "regular": "https://images.unsplash.com/photo-1627483262268-9c2b5b2834b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzQ4MjB8MXwxfHNlYXJjaHw4fHxiYWNrZ3JvdW5kfGVufDB8fHx8MTY1NDM2NTQwNg&ixlib=rb-1.2.1&q=80&w=1080",
         "small": "https://images.unsplash.com/photo-1627483262268-9c2b5b2834b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzQ4MjB8MXwxfHNlYXJjaHw4fHxiYWNrZ3JvdW5kfGVufDB8fHx8MTY1NDM2NTQwNg&ixlib=rb-1.2.1&q=80&w=400",
         "thumb": "https://images.unsplash.com/photo-1627483262268-9c2b5b2834b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzQ4MjB8MXwxfHNlYXJjaHw4fHxiYWNrZ3JvdW5kfGVufDB8fHx8MTY1NDM2NTQwNg&ixlib=rb-1.2.1&q=80&w=200",
         "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1627483262268-9c2b5b2834b5"
      },
      {
         "raw": "https://images.unsplash.com/photo-1487147264018-f937fba0c817?ixid=MnwzMzQ4MjB8MHwxfHNlYXJjaHw5fHxiYWNrZ3JvdW5kfGVufDB8fHx8MTY1NDM2NTQwNg&ixlib=rb-1.2.1",
         "full": "https://images.unsplash.com/photo-1487147264018-f937fba0c817?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMzQ4MjB8MHwxfHNlYXJjaHw5fHxiYWNrZ3JvdW5kfGVufDB8fHx8MTY1NDM2NTQwNg&ixlib=rb-1.2.1&q=80",
         "regular": "https://images.unsplash.com/photo-1487147264018-f937fba0c817?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzQ4MjB8MHwxfHNlYXJjaHw5fHxiYWNrZ3JvdW5kfGVufDB8fHx8MTY1NDM2NTQwNg&ixlib=rb-1.2.1&q=80&w=1080",
         "small": "https://images.unsplash.com/photo-1487147264018-f937fba0c817?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzQ4MjB8MHwxfHNlYXJjaHw5fHxiYWNrZ3JvdW5kfGVufDB8fHx8MTY1NDM2NTQwNg&ixlib=rb-1.2.1&q=80&w=400",
         "thumb": "https://images.unsplash.com/photo-1487147264018-f937fba0c817?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzQ4MjB8MHwxfHNlYXJjaHw5fHxiYWNrZ3JvdW5kfGVufDB8fHx8MTY1NDM2NTQwNg&ixlib=rb-1.2.1&q=80&w=200",
         "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1487147264018-f937fba0c817"
      },
      {
         "raw": "https://images.unsplash.com/photo-1521459467264-802e2ef3141f?ixid=MnwzMzQ4MjB8MHwxfHNlYXJjaHwxMHx8YmFja2dyb3VuZHxlbnwwfHx8fDE2NTQzNjU0MDY&ixlib=rb-1.2.1",
         "full": "https://images.unsplash.com/photo-1521459467264-802e2ef3141f?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMzQ4MjB8MHwxfHNlYXJjaHwxMHx8YmFja2dyb3VuZHxlbnwwfHx8fDE2NTQzNjU0MDY&ixlib=rb-1.2.1&q=80",
         "regular": "https://images.unsplash.com/photo-1521459467264-802e2ef3141f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzQ4MjB8MHwxfHNlYXJjaHwxMHx8YmFja2dyb3VuZHxlbnwwfHx8fDE2NTQzNjU0MDY&ixlib=rb-1.2.1&q=80&w=1080",
         "small": "https://images.unsplash.com/photo-1521459467264-802e2ef3141f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzQ4MjB8MHwxfHNlYXJjaHwxMHx8YmFja2dyb3VuZHxlbnwwfHx8fDE2NTQzNjU0MDY&ixlib=rb-1.2.1&q=80&w=400",
         "thumb": "https://images.unsplash.com/photo-1521459467264-802e2ef3141f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzQ4MjB8MHwxfHNlYXJjaHwxMHx8YmFja2dyb3VuZHxlbnwwfHx8fDE2NTQzNjU0MDY&ixlib=rb-1.2.1&q=80&w=200",
         "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1521459467264-802e2ef3141f"
      },
      {
         "raw": "https://images.unsplash.com/photo-1476820865390-c52aeebb9891?ixid=MnwzMzQ4MjB8MHwxfHNlYXJjaHwxMXx8YmFja2dyb3VuZHxlbnwwfHx8fDE2NTQzNjU0MDY&ixlib=rb-1.2.1",
         "full": "https://images.unsplash.com/photo-1476820865390-c52aeebb9891?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMzQ4MjB8MHwxfHNlYXJjaHwxMXx8YmFja2dyb3VuZHxlbnwwfHx8fDE2NTQzNjU0MDY&ixlib=rb-1.2.1&q=80",
         "regular": "https://images.unsplash.com/photo-1476820865390-c52aeebb9891?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzQ4MjB8MHwxfHNlYXJjaHwxMXx8YmFja2dyb3VuZHxlbnwwfHx8fDE2NTQzNjU0MDY&ixlib=rb-1.2.1&q=80&w=1080",
         "small": "https://images.unsplash.com/photo-1476820865390-c52aeebb9891?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzQ4MjB8MHwxfHNlYXJjaHwxMXx8YmFja2dyb3VuZHxlbnwwfHx8fDE2NTQzNjU0MDY&ixlib=rb-1.2.1&q=80&w=400",
         "thumb": "https://images.unsplash.com/photo-1476820865390-c52aeebb9891?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzQ4MjB8MHwxfHNlYXJjaHwxMXx8YmFja2dyb3VuZHxlbnwwfHx8fDE2NTQzNjU0MDY&ixlib=rb-1.2.1&q=80&w=200",
         "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1476820865390-c52aeebb9891"
      }
   ]
}

function getExtension(filename) {
   try {
      var parts = filename.split('.')
      return _imageOrVideo(parts[parts.length - 1])
   } catch (error) {
      return 'image'
   }
}

function _imageOrVideo(filename) {
   var type = ''
   switch (filename) {
      case 'm4v':
         type = 'video'
         break
      case 'avi':
         type = 'video'
         break
      case 'mpg':
         type = 'video'
         break
      case 'mp4':
         type = 'video'
         break
      case 'mkv':
         type = 'video'
         break
      case 'mov':
         type = 'video'
         break
      case 'jpg':
         type = 'image'
         break
      case 'gif':
         type = 'image'
         break
      case 'bmp':
         type = 'image'
         break
      case 'png':
         type = 'image'
         break
      default:
         type = 'image'
         break
   }
   return type

}

function getNumberFormat(number) {
   return new Intl.NumberFormat().format(number)
}

function getDeomoDate() {
   const flights = [{
      CHAORD: "D",
      CHCINT: "301-311",
      CHCKZN: "A",
      CHFLTN: "4548",
      CHLOC1: "VAR",
      CHLOC1CH: "??????????????",
      CHLOC1D: "VARNA",
      CHLOC1T: "VARNA",
      CHLOC1TH: "??????????",
      CHLOCCT: "BULGARIA",
      CHOPER: "W6",
      CHOPERD: "WIZZAIR",
      CHPTOL: "2022-07-31T08:20:00",
      CHRMINE: "ON TIME",
      CHRMINH: "????????",
      CHSTOL: "2022-07-31T08:20:00",
      CHTERM: "1",
      createdAt: 1659013208828,
      incrementalId: "W6-4548-2022-07-31T08:20:00",
      _id: "62e225e624b3b7278b3f30d3",
   }]

   const flightList = [{
      _id: {
         CHAORD: "D",
         CHLOCCT: "ISRAEL",
         CHOPERD: "ISRAIR AIRLINES",
      }
   }]

   const lastRefresh = [{
      createdAt: 1659245408276
   }]

   const minDate = [{
      CHSTOL: "2022-07-18T00:00:00"
   }]

   const maxDate = [{
      CHSTOL: "2022-07-18T00:00:00"
   }]

   return { flights, flightList, lastRefresh, minDate, maxDate }

}

function getFlightList(field, groups, currAirline = '', currDestination = '', board) {
   if (!groups) return
   let list = []

   list = groups
      .filter(flight => board && flight.CHAORD === board)
      .filter(flight => currAirline ? flight.CHOPERD === currAirline : flight)
      .filter(flight => currDestination ? flight.CHLOCCT === currDestination : flight)

   if (field === 'CHRMINE') {
      list = _getStatusList(board)
   } else if (field === 'CHSTOL') {
      list = _getDistinctList(field, list)
      list.unshift({ value: '', label: 'All', name: field })
   } else {
      list = _getDistinctList(field, list)
   }
   return list
}

function _getStatusList(board) {
   let list = []

   if (board === 'D') {
      list = [
         { value: 'ON TIME', label: 'ON TIME', name: 'CHRMINE' },
         { value: 'CANCELED', label: 'CANCELED', name: 'CHRMINE' },
         { value: 'DEPARTED', label: 'DEPARTED', name: 'CHRMINE' },
         { value: 'DELAYED', label: 'DELAYED', name: 'CHRMINE' },
      ]
   } else {
      list = [
         { value: 'NOT FINAL', label: 'NOT FINAL', name: 'CHRMINE' },
         { value: 'FINAL', label: 'FINAL', name: 'CHRMINE' },
         { value: 'CANCELED', label: 'CANCELED', name: 'CHRMINE' },
         { value: 'DELAYED', label: 'DELAYED', name: 'CHRMINE' },
         { value: 'LANDED', label: 'LANDED', name: 'CHRMINE' },
         { value: 'LANDING', label: 'LANDING', name: 'CHRMINE' },
      ]
   }
   return list
}

function _getDistinctList(field, list) {
   list = [... new Set(list.map(flight => field === 'CHSTOL' ? new Date(flight[field]).toLocaleDateString('en-GB') : flight[field]))]
   list = list.map(flight => ({ value: flight, label: flight, name: field })).sort((a, b) => a.value - b.value)
   return list
}

function getAirLineLogo (code) {
   if (code === 'EZY') code = 'U2'
   const logo = `https://daisycon.io/images/airline/?width=300&height=150&color=ffffff&iata=${code}`
   return logo
}

function getFlightStatisticByAirline (airline, board) {
      const flights = airline.filter(airline => airline.CHAORD === board)
      const countFlightNo = flights.length
      const countFlight = flights.reduce((acc, airline) => airline.countFlights + acc, 0)
      const countDifference = flights.reduce((acc, airline) => airline.totalDifference + acc, 0)
      const countCanceledFlight = flights
         .filter(airline => airline.CHRMINE === 'CANCELED')
         .reduce((acc, airline) => airline.countFlights + acc, 0)

      const countDelayFlight = flights
         .filter(airline => airline.CHRMINE !== 'CANCELED')
         .reduce((acc, airline) => airline.countDelay + acc, 0)

      const countEarlyFlight = flights
         .filter(airline => airline.CHRMINE !== 'CANCELED')
         .reduce((acc, airline) => airline.countEarly + acc, 0)

      const countOnTimeFlight = flights
         .filter(airline => airline.CHRMINE !== 'CANCELED')
         .reduce((acc, airline) => airline.countOnTime + acc, 0)

      const flightCountry = flights.map(airline => airline.CHLOCCT)
      const countDistinctCountries = new Set([...flightCountry])

      const flightCity = flights.map(airline => airline.CHLOC1T)
      const countDistinctCites = new Set([...flightCity])

      return { countFlightNo, countFlight, countDifference, countCanceledFlight, countDelayFlight, countOnTimeFlight, countEarlyFlight, countDistinctCountries, countDistinctCites }
}

function formatAsPercent(num) {
   return new Intl.NumberFormat('default', {
      style: 'percent',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
   }).format(num);
}