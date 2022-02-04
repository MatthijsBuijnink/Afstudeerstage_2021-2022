import Route from '@ember/routing/route';

export default class ScientistsRoute extends Route {
  async model() {
    const response = await fetch(
      'https://plm.dtcmedia.dev/api/trims/2/lease-lengths'
    );
    const data = await response.json();
    return data;
  }
}
