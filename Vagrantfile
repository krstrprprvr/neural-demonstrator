Vagrant.require_version ">= 1.7.0"

Vagrant.configure(2) do |config|
  config.vm.box = "ubuntu/trusty64"
  config.vm.hostname = "neural-demonstrator.local"
  config.vm.synced_folder ".", "/var/www/project"
  config.ssh.insert_key = false
  config.vm.network "forwarded_port", guest: 80, host: 8080
  config.vm.network "private_network", ip: "192.168.50.250"
  config.vm.provision "shell", inline: <<-SHELL
    apt-get update
    apt-get install -y g++
    curl -sL https://deb.nodesource.com/setup_0.12 | sh
    apt-get install -y nodejs
    su vagrant
    mkdir /home/vagrant/node_modules
    cd /var/www/project
    ln -s /home/vagrant/node_modules/ node_modules
    npm install brain.js
  SHELL
end