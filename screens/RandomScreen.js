//React
import React, { useEffect, useState } from "react";
import { Button, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";

//API
import { getMovieDiscover } from "../api/endpoints.js";

//Styled Components
import {
  Headline,
  MainContainer,
  CenterContainer,
  Paragraph,
} from "../redux-store/StyledComponents.js";

import RoundedButtonComponent from "../components/RoundedButtonComponent.js";

export default RandomScreen = ({ navigation }) => {
  const onRandomClick = () => {
    //TODO get List of random movies
    fetchMovies();
  };

  //get movie object from getMovieDetails() and set movie state.
  const fetchMovies = async () => {
    let requestParams;
    try {
      requestParams = randomRequestParams();
      let movieArray = await getMovieDiscover(requestParams);
      while (movieArray.length < 5) {
        requestParams = randomRequestParams();
        movieArray = await getMovieDiscover(requestParams);
      }
      navigation.navigate("MovieDetailsListScreen", {
        movies: movieArray,
        initialScrollIndex: 0,
        requestParams: requestParams,
        passedPageNR: 1,
      });
    } catch (e) {
      //throw e;
    }
  };

  const randomRequestParams = () => {
    //ramdom prarams: releasedate min max, vote min max, runtime min max, genre

    const { startDateString, endDateSting } = randomDates();
    const [voteMin, voteMax] = randomVotes();
    const [runtimeMin, runtimeMax] = randomRuntimes();
    const randomGenreId = [randomGenre()];

    let requestParams = {
      page: 1,
      // voteMin: voteMin,
      // voteMax: voteMax,
      voteCountMin: 100,
      genres: randomGenreId,
      runtimeMin: runtimeMin,
      runtimeMax: runtimeMax,
      releaseDateMin: startDateString,
      releaseDateMax: endDateSting,
    };

    console.log("request params:", requestParams);

    return requestParams;
  };

  const randomGenre = () => {
    const genres = [
      { id: 28, name: "Action" },
      { id: 12, name: "Adventure" },
      { id: 16, name: "Animation" },
      { id: 35, name: "Comedy" },
      { id: 80, name: "Crime" },
      { id: 18, name: "Drama" },
      { id: 10751, name: "Family" },
      { id: 14, name: "Fantasy" },
      { id: 36, name: "History" },
      { id: 27, name: "Horror" },
      { id: 10402, name: "Music" },
      { id: 9648, name: "Mystery" },
      { id: 10749, name: "Romance" },
      { id: 878, name: "Science Fiction" },
      { id: 53, name: "Thriller" },
      { id: 10752, name: "War" },
    ];

    // Choose a random genre
    const randomIndex = Math.floor(Math.random() * genres.length);
    const selectedGenre = genres[randomIndex];

    // Return the selected genre ID
    return selectedGenre.id;
  };

  const randomRuntimes = () => {
    // 80-100 100-120 120-140 120-180min
    const randomNumberSet = [
      [80, 120],
      [120, 180],
    ];

    const randomIndex = Math.floor(Math.random() * randomNumberSet.length);
    const selectedNumbers = randomNumberSet[randomIndex];

    return selectedNumbers;
  };

  const randomVotes = () => {
    const randomNumberSet = [
      [6, 8],
      [8, 10],
    ];

    const randomIndex = Math.floor(Math.random() * randomNumberSet.length);
    const selectedNumbers = randomNumberSet[randomIndex];

    return selectedNumbers;
  };

  const randomDates = () => {
    const currentDate = new Date();

    const randomYear = Math.floor(Math.random() * 40) + 1;

    const startDate = new Date();
    startDate.setFullYear(currentDate.getFullYear() - randomYear);

    const endDate = new Date(startDate);
    endDate.setFullYear(startDate.getFullYear() + 5);

    const startDateString = startDate.toISOString().split("T")[0];
    const endDateSting = endDate.toISOString().split("T")[0];

    return { startDateString, endDateSting };
  };

  return (
    <MainContainer>
      <Headline small>Explore Random Films</Headline>
      <CenterContainer>
        <RoundedButtonComponent
          clickHandler={onRandomClick}
          iconName={"shuffle"}
          size={320}
          iconSize={160}
        />
      </CenterContainer>
    </MainContainer>
  );
};
