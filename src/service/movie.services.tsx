"use server";
import React from "react";
import axios from "axios";

export async function getAllMovies() {
  try {
    const res = await axios.get(`${process.env.MOVIE_API_URL_APPKEY}`);
    const result = res.data;
    return result;
  } catch (error) {
    console.log(error + "Failed to fetch movies");
    return { data: [] };
  }
}