"use client";
import React, { useState } from "react";
import {
  Box, Tabs, Tab, Typography, Paper, Select, MenuItem, FormControl, InputLabel,
  Stack, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Chip
} from "@mui/material";

import {
  getStates, getStatesAndCapitals, getLgas, getTowns,
  getCapital, getState, getStatesData,
} from "nigeria-state-lga-data";

function TabPanel({ children, value, index }) {
  return value === index ? <Box sx={{ mt: 2 }}>{children}</Box> : null;
}

export default function DemoTester() {
  const states = getStates();
  const [tab, setTab] = useState(0);
  const savedState = localStorage.getItem("selectedState");
  const [selectedState, setSelectedState] = useState(savedState || "");

  const handleTabChange = (_, newValue) => setTab(newValue);
  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
    localStorage.setItem("selectedState", event.target.value);
  }

  // Fonction helper pour afficher LGAs ou Towns en Chip
  const renderChips = (items) => (
    <Stack direction="row" flexWrap="wrap" spacing={2} sx={{ mt: 1 }}>
      {items.map(item => <Chip key={item} label={item} size="small" sx={{ mb: 5 }} />)}
    </Stack>
  );

  return (
    <Paper variant="outlined" sx={{
      m: { xs: 2, md: 12 },
      mt: 6,
      p: { xs: 2, md: 3 },
      borderColor: 'rgb(88%, 88%, 88%)',
      borderWidth: 1,
      borderStyle: 'solid',
      borderRadius: 2,
    }}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Interactive Demo – Test All Methods
      </Typography>

      <Tabs
        value={tab}
        onChange={handleTabChange}
        variant="scrollable"
        scrollButtons="auto"
        sx={{ mb: 2 }}
      >
        {["getStates()", "getStatesAndCapitals()", "getLgas(state)", "getTowns(state)", "getCapital(state)", "getState(state)", "getStatesData()"]
          .map((label, i) => (
            <Tab key={i} label={label} sx={{ minWidth: 140 }} />
        ))}
      </Tabs>

      {/* getStates() */}
      <TabPanel value={tab} index={0}>
        <Typography>All States:</Typography>
        {renderChips(getStates())}
      </TabPanel>

      {/* getStatesAndCapitals() */}
      <TabPanel value={tab} index={1}>
        <Typography>States and Capitals:</Typography>
        <TableContainer sx={{ mt: 1, maxHeight: 300 }}>
          <Table size="small" stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell>State</TableCell>
                <TableCell>Capital</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {getStatesAndCapitals().map(({ state, capital }) => (
                <TableRow key={state}>
                  <TableCell>{state}</TableCell>
                  <TableCell>{capital}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </TabPanel>

      {/* getLgas(state) */}
      <TabPanel value={tab} index={2}>
        <FormControl fullWidth sx={{ mb: 2 }}>
          <InputLabel>Select State</InputLabel>
          <Select value={selectedState} label="Select State" onChange={handleStateChange}>
            {states.map((s) => <MenuItem key={s} value={s}>{s}</MenuItem>)}
          </Select>
        </FormControl>
        {selectedState && (
          <Box>
            <Typography>LGAs of {selectedState}:</Typography>
            <Box sx={{ maxHeight: 200, overflowY: 'auto', mt: 1 }}>
              {renderChips(getLgas(selectedState))}
            </Box>
          </Box>
        )}
      </TabPanel>

      {/* getTowns(state) */}
      <TabPanel value={tab} index={3}>
        <FormControl fullWidth sx={{ mb: 2 }}>
          <InputLabel>Select State</InputLabel>
          <Select value={selectedState} label="Select State" onChange={handleStateChange}>
            {states.map((s) => <MenuItem key={s} value={s}>{s}</MenuItem>)}
          </Select>
        </FormControl>
        {selectedState && (
          <Box>
            <Typography>Towns of {selectedState}:</Typography>
            <Box sx={{ maxHeight: 200, overflowY: 'auto', mt: 1 }}>
              {renderChips(getTowns(selectedState))}
            </Box>
          </Box>
        )}
      </TabPanel>

      {/* getCapital(state) */}
      <TabPanel value={tab} index={4}>
        <FormControl fullWidth sx={{ mb: 2 }}>
          <InputLabel>Select State</InputLabel>
          <Select value={selectedState} label="Select State" onChange={handleStateChange}>
            {states.map((s) => <MenuItem key={s} value={s}>{s}</MenuItem>)}
          </Select>
        </FormControl>
        {selectedState && (
          <Typography>Capital of {selectedState}: <strong>{getCapital(selectedState)}</strong></Typography>
        )}
      </TabPanel>

      {/* getState(state) */}
      <TabPanel value={tab} index={5}>
        <FormControl fullWidth sx={{ mb: 2 }}>
          <InputLabel>Select State</InputLabel>
          <Select value={selectedState} label="Select State" onChange={handleStateChange}>
            {states.map((s) => <MenuItem key={s} value={s}>{s}</MenuItem>)}
          </Select>
        </FormControl>
        {selectedState && (
          <Box sx={{ bgcolor: "#f5f5f5", p: 2, borderRadius: 1, maxHeight: 300, overflow: 'auto' }}>
            <pre>{JSON.stringify(getState(selectedState), null, 2)}</pre>
          </Box>
        )}
      </TabPanel>

      {/* getStatesData() */}
      <TabPanel value={tab} index={6}>
        <Typography>All States Data:</Typography>
        <Box sx={{ maxHeight: 400, overflow: "auto", mt: 1, bgcolor: "#f5f5f5", p: 2, borderRadius: 1 }}>
          <pre>{JSON.stringify(getStatesData(), null, 2)}</pre>
        </Box>
      </TabPanel>
    </Paper>
  );
}
