import { Router } from 'express';
const ElasticSearchRoutes = Router();
import { checkSecretToken } from '../utility/tokenValidation';

import { getSearchResult, indexCompany, indexBrand, indexCategory, indexProduct } from '../controllers/elasticSearch.controller';

ElasticSearchRoutes.get('/:searchString', checkSecretToken, getSearchResult);
ElasticSearchRoutes.post('/category', checkSecretToken, indexCategory);
ElasticSearchRoutes.post('/company', checkSecretToken, indexCompany);
ElasticSearchRoutes.post('/brand', checkSecretToken, indexBrand);
ElasticSearchRoutes.post('/product', checkSecretToken, indexProduct);


export default ElasticSearchRoutes;