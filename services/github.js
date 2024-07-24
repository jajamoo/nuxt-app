// services/github.js
import axios from 'axios';

const githubApi = axios.create({
    baseURL: 'https://api.github.com',
    headers: {
        Authorization: `Bearer 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`,
    },
});

export const getProject = async (projectId) => {
    const response = await githubApi.get(`/projects/${projectId}`);
    return response.data;
};

export const getProjectColumns = async (projectId) => {
    const response = await githubApi.get(`/projects/${projectId}/columns`);
    return response.data;
};

export const getColumnCards = async (columnId) => {
    const response = await githubApi.get(`/projects/columns/${columnId}/cards`);
    return response.data;
};
