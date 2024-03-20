//React
import React, { useState, useEffect } from "react";
import {
  View,
  FlatList,
  useWindowDimensions,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import MoviePosterItem from "../components/MoviePosterItem.js";
import { useSelector } from "react-redux";

export default SearchResults = ({
  movieList,
  clickHandler,
  listEndReached,
  loading,
}) => {
  const storedAppearance = useSelector((state) => state.appearance);

  //usestates
  const [numberOfColumns, setNumberOfColumns] = useState(8);
  const [flatListColumnGap, setFlatListColumnGap] = useState(20);

  //TODO dont use the margin hardcoded, get it from Theme
  const itemFixedWidth = 92;

  useEffect(() => {
    calculateDimensions();
    Dimensions.addEventListener("change", () => {
      calculateDimensions();
    });
  }, []);

  //Calculate Dimensions for FlatList
  const calculateDimensions = () => {
    //TODO dont use the margin hardcoded, get it from Theme
    const listWidth =
      Dimensions.get("screen").width -
      2 * (storedAppearance.isTablet ? 56 : 24);
    const newNumberOfColumns = Math.floor(listWidth / itemFixedWidth);
    const newFlatListColumnGap =
      (listWidth - newNumberOfColumns * itemFixedWidth) / newNumberOfColumns +
      1;

    // console.log(
    //   listWidth - newNumberOfColumns * itemFixedWidth,
    //   newNumberOfColumns + 1,
    // );
    // Update state only if values change
    if (newNumberOfColumns !== numberOfColumns) {
      setNumberOfColumns(newNumberOfColumns);
    }
    if (newFlatListColumnGap !== flatListColumnGap) {
      setFlatListColumnGap(newFlatListColumnGap);
    }
  };

  return movieList.length > 0 ? (
    <FlatList
      key={numberOfColumns}
      numColumns={numberOfColumns}
      contentContainerStyle={{
        gap: 8,
      }}
      columnWrapperStyle={{ gap: flatListColumnGap }}
      data={movieList}
      renderItem={({ item, index }) => (
        <MoviePosterItem
          moviePosterPath={item._poster_path}
          withoutMargin={true}
          clickHandler={() => clickHandler(index)}
        />
      )}
      keyExtractor={(item, index) => index}
    />
  ) : null;
};
