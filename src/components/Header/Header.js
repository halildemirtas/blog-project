"use client";

import React from "react";
import clsx from "clsx";
import { Rss, Sun, Moon } from "react-feather";

import Logo from "@/components/Logo";
import VisuallyHidden from "@/components/VisuallyHidden";

import styles from "./Header.module.css";

function Header({ theme, className, toggleTheme, ...delegated }) {
  return (
    <header className={clsx(styles.wrapper, className)} {...delegated}>
      <Logo />

      <div className={styles.actions}>
        
        <button
          className={styles.action}
          onClick={() => {
            toggleTheme(theme);
          }}
        >
          {theme === "light" ? <Sun size="1.5rem" /> : <Moon size="1.5rem" />}
          <VisuallyHidden>Toggle dark / light mode</VisuallyHidden>
        </button>
      </div>
    </header>
  );
}

export default Header;
