import { Phone } from "../types"
import { fetchPhones } from "./fetchPhones"
import { Alert } from "react-native"

export function onEndReached(
  setFetchingMore: (fetchingMore: boolean) => void, 
  offset: number,
  addMobiles: (mobiles: Phone[]) => void,
  ): void {
    // We must fetch more phones)
    console.log('onEndReached')
    setFetchingMore(true)
    fetchPhones(offset)
      .then((mobiles) => {
        setFetchingMore(false)
        addMobiles(mobiles)
      })
      .catch((error) => {
        setFetchingMore(false)
        Alert.alert('Cannot get phones', error)
      })
}