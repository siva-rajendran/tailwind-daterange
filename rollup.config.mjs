import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";

export default {
    input: "src/index.tsx",
    output: [
        {
            file: "dist/index.esm.js",
            format: "esm",
            sourcemap: true,
            inlineDynamicImports: true
        }
    ],
    external: ["react", "react/jsx-runtime", "dayjs"],
    plugins: [resolve(), commonjs(), typescript({ tsconfig: "./tsconfig.rollup.json" })]
};
