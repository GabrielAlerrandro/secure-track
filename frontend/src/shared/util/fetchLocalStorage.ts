export const getThemeFromLocalStorage = () => {
  const storedTheme = localStorage.getItem("theme")
  return (storedTheme as "light" | "dark") || "light" // define que o padrão é light
}

export const setThemeInLocalStorage = (theme: "light" | "dark"): void => {
  localStorage.setItem("theme", theme)
}
