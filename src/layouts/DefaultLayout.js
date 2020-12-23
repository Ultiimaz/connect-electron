import React, {Component} from 'react';
import TitleBar from "../components/Titlebar";

const DefaultLayout = props => {
    return (
      <div className="bg-gray-700 w-screen h-screen block">
        <header className="bg-gray-800 text-white h-16 text-3xl"><span className="text-white text-3xl mx-5 my-20">Connect</span></header>
        <main >
          {props.children}
        </main>
      </div>
    );
}

export default DefaultLayout;
