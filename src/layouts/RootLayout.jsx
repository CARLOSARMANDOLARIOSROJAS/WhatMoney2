import { Outlet } from "react-router-dom";
import { Nav } from "../components/Nav"
import { Hero } from "../components/Hero";

export const RootLayout = () => {
  return (
    <div>
        <Hero/>
        <Nav/>
        <Outlet/>
    </div>
    )
}
