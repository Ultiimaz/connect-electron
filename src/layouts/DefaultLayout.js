import React, {Component} from 'react';
import TitleBar from "../components/Titlebar";

const DefaultLayout = props => {
    return (
      <div className="bg-purple-800 w-screen h-screen block">
        <header className="bg-gray-700 text-white h-16">Connect</header>
        <main >
          {props.children}
        </main>
      </div>
    );
}

export default DefaultLayout;
