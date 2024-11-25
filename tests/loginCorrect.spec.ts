import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

// se dirigige a la pagina:

  await page.goto('https://stage.miopartners.com/backend/');

  // verificar que el imput este visible del usuario 
  await expect(page.locator('#okta-signin-username')).toBeVisible();

  // seleccionamos el input y escribimos el nombre del usuario 
  await page.locator('#okta-signin-username').fill('jaime.vigo@dekoding.pe');
  
  
  //verificar que el imput este visible de la contraseña 
  await expect(page.locator('#okta-signin-password')).toBeVisible();

  //seleccionamos el input y escribimos la contraseña
  await page.locator('#okta-signin-password').fill('ResetPassword10.');

  //revisar si esta visible el botton iniciar sesion
  await page.locator('#okta-signin-submit').click();

  //verificar si me sale el botton de enviar push
  await expect(page.locator('input.button.button-primary')).toBeVisible();

  // le damos click en el botton push 
  await page.getByRole('button', { name: 'Send Push' }).click();

  // vemos el botton con la notificacion de push enviada
  await expect(page.locator('input.button.button-primary.link-button-disabled')).toBeVisible();

  await page.goto('https://stage.miopartners.com/summary');
  
  //Redireccion a la pagina de inicio https://stage.miopartners.com/alumniExpansion


});