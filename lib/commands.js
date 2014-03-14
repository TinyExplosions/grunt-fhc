module.exports = {
    target:     require('./command_target'),
    pull:       require('./command_pull'),
    stage:      require('./command_stage'),
    local:      require('./command_local'),
    start:      require('./command_start'),
    stop:       require('./command_stop'),
    restart:    require('./command_restart'),
    build:      require('./command_build'),
    undeploy:   require('./command_undeploy')
};
