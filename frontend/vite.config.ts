import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
import path from "path";

export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, process.cwd(), "");
	const port = Number(env.VITE_PORT) || 3000;
	
	return {
		server: {
			port,
			allowedHosts: [".ngrok-free.app"],
		},
		plugins: [
			react(),
			createSvgIconsPlugin({
				iconDirs: [path.resolve(process.cwd(), "src/assets/icons")],
				symbolId: "icon-[name]",
			}),
		],
	};
});
