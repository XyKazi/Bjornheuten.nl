import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import type { Container, Engine } from "tsparticles-engine";
import { useCallback, useEffect, useState } from "react";
import { Theme } from "./types";

function App() {
    const [theme, setTheme] = useState<Theme>("light");
    
    const themeConfigs: { light: string; dark: string } = {
        light: "/particlesjs-config-light.json",
        dark: "/particlesjs-config.json",
    };

    const particlesInit = useCallback(async (engine: Engine) => {
        console.log(engine);

        // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
        // await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(
        async (container: Container | undefined) => {
            console.log(container);
        },
        []
    );

    useEffect(() => {
        setTimeout(() => {
            // Check if body has dark class
            if (document.body.classList.contains("dark")) {
                // If it has dark class, set the theme to dark
                setTheme("dark");
            } else {
                // If it has not dark class, set the theme to light
                setTheme("light");
            }
        }, 100);
    }, []);

    return (
        <div className="min-h-screen min-w-screen bg-background text-text">
            {theme === "light" ? (
                <Particles
                    id="tsparticles"
                    url={themeConfigs.light}
                    init={particlesInit}
                    loaded={particlesLoaded}
                />
            ) : (
                <Particles
                    id="tsparticles"
                    url={themeConfigs.dark}
                    init={particlesInit}
                    loaded={particlesLoaded}
                />
            )}
            <Navbar darkmode={theme} setDarkmode={setTheme} />
            <Outlet />
        </div>
    );
}

export default App;
