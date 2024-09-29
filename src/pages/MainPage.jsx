import React from "react";
import { Link } from "react-router-dom";

export default function MainPage() {
  return (
    <div className="p-10 pl-20">
      <ul className="list-disc flex flex-col gap-2">
        <li>
          <Link
            to="/hw1"
            className="text-blue-500 hover:text-blue-700 underline"
          >
            [과제] 01. HTML/CSS를 이용해서 넷플릭스 사이트 만들기
          </Link>
        </li>
        <li>
          <Link
            to="/hw2"
            className="text-blue-500 hover:text-blue-700 underline"
          >
            [과제] 02. 자바스크립트를 이용해서 Todo 앱 만들기
          </Link>
        </li>
        <li>
          <Link
            to="/hw3"
            className="text-blue-500 hover:text-blue-700 underline"
          >
            [과제] 03. 자바스크립트를 이용해서 github finder 앱 만들기
          </Link>
        </li>
        <li>
          <Link
            to="/hw4"
            className="text-blue-500 hover:text-blue-700 underline"
          >
            [과제] 04. 자바스크립트를 이용해서 Spread Sheet 앱 만들기
          </Link>
        </li>
        <li>
          <Link
            to="/hw5"
            className="text-blue-500 hover:text-blue-700 underline"
          >
            [과제] 05. 리액트를 이용해서 CRUD 앱 만들기
          </Link>
        </li>
        <li>
          <Link
            to="/hw6"
            className="text-blue-500 hover:text-blue-700 underline"
          >
            [과제] 06. 리액트를 이용해서 쇼핑몰 앱 만들기
          </Link>
        </li>
        <li>
          <Link
            to="/hw7"
            className="text-blue-500 hover:text-blue-700 underline"
          >
            [과제] 07. 리액트를 이용해서 노트 앱 만들기
          </Link>
        </li>
      </ul>
    </div>
  );
}
