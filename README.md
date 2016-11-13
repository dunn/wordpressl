# Ansible playbook for WordPress

This is a playbook for setting up a stock WordPress installation with
SSL/TLS support thanks to [Let’s Encrypt](https://letsencrypt.org/).

This playbook was written for CentOS VMs from DigitalOcean, so some
modification may be necessary for use elsewhere.

## Basic use

1. Create a CentOS virtual server (untested on other OSs) on
   DigitalOcean or the provider of your choice (note that it’s assumed
   you can SSH in as root initially).

2. Run `bin/create`.  It will prompt you for the domain name/IP
   address, SSH key, and passwords which are passed to Ansible.  These
   session variables will be written to `session.yml`; you can
   pre-populate those variables by copying `session.yml.template` to
   `session.yml` and filing it out.

3. When provisioning completes, `session.yml` will be deleted.  If
   provisioning fails and for some reason you don’t want to re-run the
   job, you should delete it, since it will contain passwords in
   plain-text.

If you choose not to create a TLS certificate for the server, you can
add one later with `bin/add-tls`.

## Prerequisites

- Ansible 2.1.x

## Extras

- A script will be installed at `/usr/local/bin/wp_url` on the server;
    this script lets you update the hostname in the WordPress database.
    Usage:

    ```shell
    wp_url <https://new.url.com>
    ```

    It will prompt you for the password to the WordPress database.

- You can download the WordPress database for backing up or migrating
  it by running `bin/download-db`.
