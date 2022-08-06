import { httpService } from './http.service'

export const flightService = {
   query,
   queryGroup,
   queryGroupList,
   getById,
   save,
   remove,
   getEmptyFlight,
   queryGroupByCategory
}

async function query(filter = {}) {
   try {
      return await httpService.get('flight/', filter)
   } catch (err) {
      console.log('cant get flights!')
      throw err
   }
}

async function queryGroup(group) {
   try {
      return await httpService.get('flight/group', group)
   } catch (err) {
      console.log('cant get flights groups!')
      throw err
   }
}

async function queryGroupByCategory(category) {
   try {
      return await httpService.get('flight/groupByCategory', category)
   } catch (err) {
      console.log('cant get flights groups by category!')
      throw err
   }
}

async function queryGroupList(filter) {
   try {
      return await httpService.get('flight/groupList', filter)
   } catch (err) {
      console.log('cant get flights groups list!')
      throw err
   }
}

async function getById(flightId) {
   try {
      return await httpService.get(`flight/${flightId}`)
   } catch (err) {
      console.log('cant get flight by id!')
      throw err
   }
}

async function remove(flightId) {
   try {
      return await httpService.delete(`flight/${flightId}`)
   } catch (err) {
      console.log('cant delete flight')
      throw err
   }
}

async function save(flight) {
   try {
      if (flight._id) {
         return await httpService.put(`flight/${flight._id}`, flight)
      } else {
         return await httpService.post(`flight/`, flight)
      }
   } catch (err) {
      console.log('cant save flight')
      throw err
   }
}

async function getEmptyFlight() {
   try {
      const flight = _createFlight('')
      return flight
   } catch (err) {
      console.log('cant get empty flight!')
      throw err
   }
}

function _createFlight(_id, name) {
   return { name }
}
