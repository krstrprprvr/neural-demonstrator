Vagrant.require_version ">= 1.7.0"

Vagrant.configure(2) do |config|
  config.vm.box = "ubuntu/trusty64"
  config.vm.hostname = "mud-neuron.local"
  config.vm.synced_folder ".", "/var/www/mud-neuron"
  config.ssh.insert_key = false
  config.vm.network "forwarded_port", guest: 80, host: 8080
  config.vm.network "private_network", ip: "192.168.50.250"
  config.vm.provision "shell", inline: <<-SHELL
    apt-get update
    apt-get install -y g++
    curl -sL https://deb.nodesource.com/setup_0.12 | sh
    apt-get install -y nodejs
    apt-get install -y git
    su vagrant
    mkdir /home/vagrant/node_modules
    cd /var/www/mud-neuron
    ln -s /home/vagrant/node_modules/ node_modules
    npm install brain.js
    sudo npm install https://github.com/ApelSYN/mnist
  SHELL
end