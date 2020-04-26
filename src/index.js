import dva from 'dva';
import 'nprogress/nprogress.css'
import './index.css';
import createLoading from 'dva-loading';
import { createBrowserHistory as createHistory } from 'history'

// 1. Initialize
const app = dva({ history: createHistory() });

// 2. Plugins
app.use(createLoading());

// 3. Model
app.model(require('./models/store').default);
app.model(require('./pages/Index/model').default);
app.model(require('./pages/Chat/model').default);
app.model(require('./pages/Share/model').default);
app.model(require('./pages/User/model').default);
app.model(require('./pages/Statistics/model').default);
// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
