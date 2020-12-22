import React, {Component} from 'react';
import TitleBar from "../components/Titlebar";

const DefaultLayout = props => {
    return (
      <>
        <main className="content">
          {props.children}
        </main>
      </>
    );
}

export default DefaultLayout;
