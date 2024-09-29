import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

export default function HW1MainPage() {
  return (
    <div>
      {/* Header */}
      <header>
        <nav className="navbar">
          <div className="logo">
            <Link to="/hw1">
              <img
                id="logo"
                src="/images/netflixlogo-removebg-preview.png"
                alt="netflix logo"
              />
            </Link>
          </div>
          <ul>
            <li>
              <a href="/hw1">TV Shows</a>
            </li>
            <li>
              <a href="/hw1">Movies</a>
            </li>
          </ul>
        </nav>
      </header>

      <main className=" bg-black">
        {/* Banner */}
        <div
          className="banner"
          style={{
            backgroundImage: `url("/images/banner.jpg")`,
          }}
        >
          <div className="banner_contents">
            <h1 className="banner_title">종이의 집</h1>
            <div className="banner_btn">
              <button className="bg-zinc-100 text-black text-sm">재생</button>
            </div>
            <p className="banner_description">
              역사상 최대 규모의 강도 사건을 수행하기 위해
              <br />
              교수라는 의문의 남자가 강도 8인단을 구출하는데...
            </p>
          </div>
        </div>

        {/* Netflix Originals */}
        <div className="row">
          <h2 className=" text-2xl font-semibold">NETFLIX ORIGINALS</h2>
          <div className="row_posters">
            {[...Array(8)].map((_, i) => (
              <img
                key={i}
                src={`/images/large-movie${i + 1}.jpg`} // i+1을 사용하여 1부터 8까지의 숫자를 동적으로 생성
                alt={`large movie ${i + 1}`}
                className="row_poster row_posterLarge"
              />
            ))}
          </div>
        </div>

        {/* Trending Now */}
        <div className="row">
          <h2 className=" text-2xl font-semibold">Trending Now</h2>
          <div className="row_posters flex ">
            {[...Array(7)].map((_, i) => (
              <img
                key={i}
                src={`/images/small-movie${i + 1}.jpg`}
                alt={`small movie ${i + 1}`}
                className="row_poster"
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
