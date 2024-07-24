// services/github.js
import axios from 'axios';

const githubApi = axios.create({
    baseURL: 'https://api.github.com',
    headers: {
        Authorization: `Bearer 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`,
        Accept: 'application/vnd.github.v3+json'
    },
});

export const fetchProjects = async () => {
    try {
        const response = await api.get(`/repos/${owner}/${repo}/projects`);
        return response.data;
    } catch (error) {
        console.error('Error fetching projects:', error);
        throw error;
    }
};

export const getProject = async (projectId) => {
    try {

        const response = await githubApi.get(`/projects/${projectId}`);
        return response.data;
    }
    catch (error) {
        console.error('Error fetching projects:', error);
        throw error;
    }
};

export const getProjectColumns = async (projectId) => {
    try {
        const response = await api.get(`/projects/${projectId}/columns`);
        return response.data;
    } catch (error) {
        console.error('Error fetching columns:', error);
        throw error;
    }
};

export const getOneProjectColumn = async (columnId) => {
    try {
        const response = await api.get(`/projects/columns/${columnId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching columns:', error);
        throw error;
    }
};

export const fetchProjectCards = async (columnId) => {
    try {
        const response = await api.get(`/projects/columns/${columnId}/cards`);
        return response.data;
    } catch (error) {
        console.error('Error fetching cards:', error);
        throw error;
    }
};

export const fetchProjectCard = async (cardId) => {
    try {
        const response = await api.get(`/projects/columns/cards/${cardId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching cards:', error);
        throw error;
    }
};
