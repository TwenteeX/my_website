import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import test from 'node:test';
import { projectsData } from '../src/data/projects.js';
import { interestsData } from '../src/data/interests.js';
import { orderProjects, projectCards, projectFilters, projectImages, projectOrder } from '../src/data/projectCatalog.js';

const publicRoot = new URL('../public/', import.meta.url);
const assetExists = (path) => existsSync(fileURLToPath(new URL(path.replace(/^\//, ''), publicRoot)));

test('each project and practice route has a unique ID and a translation', () => {
  for (const data of [projectsData, interestsData]) {
    const ids = data.en.map(({ id }) => id).sort((a, b) => a - b);
    assert.equal(new Set(ids).size, ids.length);
    assert.deepEqual(ids, data.zh.map(({ id }) => id).sort((a, b) => a - b));
    for (const language of ['en', 'zh']) {
      for (const item of data[language]) {
        assert.ok(item.title.trim());
        assert.ok(item.description.trim());
      }
    }
  }
});

test('all index covers and bilingual case-study images resolve to local assets', () => {
  for (const language of ['en', 'zh']) {
    for (const project of projectsData[language]) {
      assert.ok(assetExists(projectImages[project.id]), 'Missing cover: ' + project.id);
      const card = projectCards[project.id];
      assert.ok(card?.[language], 'Missing short summary: ' + project.id);
      if (card.image) assert.ok(assetExists(card.image), 'Missing index cover: ' + card.image);
      for (const section of project.sections) {
        for (const image of section.images) assert.ok(assetExists(image), 'Missing image: ' + image);
      }
    }
    for (const interest of interestsData[language]) {
      for (const item of interest.gallery) {
        if (item.image) assert.ok(assetExists(item.image), 'Missing practice image: ' + item.image);
      }
    }
  }
  assert.ok(assetExists('/resume.pdf'));
});

test('filters and presentation metadata reference real projects', () => {
  const ids = new Set(projectsData.en.map(({ id }) => id));
  assert.equal(new Set(projectOrder).size, projectOrder.length);
  for (const id of projectOrder) assert.ok(ids.has(id), 'Unknown ordered project: ' + id);
  for (const id of Object.keys(projectCards)) assert.ok(ids.has(Number(id)));
  for (const filter of projectFilters) {
    if (!filter.ids) continue;
    assert.equal(new Set(filter.ids).size, filter.ids.length);
    for (const id of filter.ids) assert.ok(ids.has(id), 'Unknown filtered project: ' + id);
  }
});

test('the catalog preserves every project and safely includes future additions', () => {
  const original = projectsData.en.map(({ id }) => id);
  const ordered = orderProjects(projectsData.en);
  assert.deepEqual(projectsData.en.map(({ id }) => id), original, 'Ordering mutated the source data');
  assert.deepEqual(ordered.map(({ id }) => id).sort((a, b) => a - b), [...original].sort((a, b) => a - b));
  const future = { id: 1000, title: 'Future project' };
  assert.equal(orderProjects([future, ...projectsData.en]).at(-1), future);
});
