import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import {resolve, join} from 'path';

const BuildPath = resolve(__dirname, '../', 'build/node_modules');
const ReactDir = join(BuildPath, 'react');
const ReactDOMDir = join(BuildPath, 'react-dom');
const SchedulerDir = join(BuildPath, 'scheduler');

console.log('BuildPath', BuildPath);

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      // {find: '', replacement: ''},
      {find: 'react', replacement: ReactDir},
      {find: 'react-dom', replacement: ReactDOMDir},
      {find: 'scheduler', replacement: SchedulerDir},
    ],
  },
  plugins: [react()],
});
