import { Application } from 'stimulus';
import AliasMapper from './AliasMapper';

import './app.scss';

const app = Application.start();

app.register('AliasMapper', AliasMapper);

